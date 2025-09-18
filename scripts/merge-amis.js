// scripts/merge-amis.js
// Read per-release CSVs (version,region,arch,ami) for 8/9/10 and:
// 1) Rebuild flat 6-column CSV (site-compatible):
//    "AlmaLinux OS","AlmaLinux OS","<version>","<region>","<ami>","<arch>"
// 2) Regenerate docs/cloud/AWS_AMIS.md with both arch values per cell.

const fs = require('fs');
const path = require('path');

const inputs = [
  { major: '8',  file: 'data/aws_amis_8.csv'  },
  { major: '9',  file: 'data/aws_amis_9.csv'  },
  { major: '10', file: 'data/aws_amis_10.csv' },
];

const unq = (s) => (s || '').trim().replace(/^"(.*)"$/, '$1');

// Parse per-release source: version,region,arch,ami
function parsePerRelease(p) {
  if (!fs.existsSync(p)) return [];
  const lines = fs.readFileSync(p, 'utf8').trim().split(/\r?\n/);
  const out = [];
  let start = 0;
  if (lines[0] && /^version\s*,\s*region\s*,\s*arch\s*,\s*ami/i.test(lines[0])) start = 1;
  for (const line of lines.slice(start)) {
    if (!line.trim()) continue;
    const [ver, region, arch, ami] = line.split(',').map(unq);
    if (!ver || !region || !arch || !ami) continue;
    out.push({ ver, region, arch, ami });
  }
  return out;
}

// 収集: byRegion[region][major][arch] = {ami, ver}
const byRegion = {};
// フラット出力用の配列
const flat = [];

for (const { major, file } of inputs) {
  const rows = parsePerRelease(file);
  for (const r of rows) {
    byRegion[r.region] ||= {};
    byRegion[r.region][major] ||= {};
    byRegion[r.region][major][r.arch] = { ami: r.ami, ver: r.ver };

    // Flat 行（サイト互換 6 列）
    // Keep quoting exactly.
    flat.push([
      '"AlmaLinux OS"',
      '"AlmaLinux OS"',
      `"${r.ver}"`,
      `"${r.region}"`,
      `"${r.ami}"`,
      `"${r.arch}"`
    ]);
  }
}

// 1) フラットCSVを書き出し（ソート: region, major, arch）
const csvOut = path.join('docs/.vuepress/public/ci-data', 'aws_amis.csv');
fs.mkdirSync(path.dirname(csvOut), { recursive: true });
flat.sort((a, b) => {
  const ra = unq(a[3]), rb = unq(b[3]); // region
  if (ra !== rb) return ra < rb ? -1 : 1;
  const va = unq(a[2]).split('.')[0], vb = unq(b[2]).split('.')[0]; // major from version
  if (va !== vb) return Number(va) - Number(vb);
  const aa = unq(a[5]), ab = unq(b[5]); // arch
  return aa < ab ? -1 : aa > ab ? 1 : 0;
});
fs.writeFileSync(csvOut, flat.map(r => r.join(',')).join('\n') + '\n');

// 2) Markdown 表（セル内に両アーキ）を出力
function cell(region, major) {
  const ent = byRegion[region] && byRegion[region][major];
  if (!ent) return '';
  const parts = [];
  if (ent['x86_64']) parts.push(`x86_64: ${ent['x86_64'].ami}`);
  if (ent['aarch64']) parts.push(`aarch64: ${ent['aarch64'].ami}`);
  return parts.join('<br>');
}

const regions = Object.keys(byRegion).sort();
const headers = ['region', 'AlmaLinux 8', 'AlmaLinux 9', 'AlmaLinux 10'];
const rows = [headers].concat(
  regions.map(r => [r, cell(r, '8'), cell(r, '9'), cell(r, '10')])
);

// Markdown table (no fancy width padding; GitHub renders fine)
const mdTable = [
  `| ${headers.join(' | ')} |`,
  `| ${headers.map(()=>'---').join(' | ')} |`,
  ...rows.slice(1).map(r => `| ${r.join(' | ')} |`)
].join('\n');

const mdOut = 'docs/cloud/AWS_AMIS.md';
fs.mkdirSync(path.dirname(mdOut), { recursive: true });
const md = [
  '# AWS AMIs',
  '',
  'This page is auto-generated at build time (merge per-release CSVs, both architectures).',
  '',
  mdTable,
  ''
].join('\n');
fs.writeFileSync(mdOut, md);

console.log('Generated:');
console.log(`  - ${mdOut}`);
console.log(`  - ${csvOut}`);

