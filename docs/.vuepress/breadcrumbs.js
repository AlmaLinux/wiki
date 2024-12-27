export default {
  functional: true,
  render(h, context) {
    const frontmatter = context.parent.$page.frontmatter;

const pathMap = {
  'Migration': { path: '/migration/', linkable: true },  
  'ELevate Project': { path: '/elevate/', linkable: true },
  'Installation': {path: '/', linkable: true },
  'Repositories': {path: '/repos/', linkable: true },
  'Extra Repositories': {path: '/repos/extras', linkable: true},
  'Release Notes': {path: '/release-notes/', linkable: true },
  'Older AlmaLinux 8 releases': {linkable: false},
  'Older AlmaLinux 9 releases': {linkable: false},
  'AlmaLinux 8 betas': {linkable: false},
  'AlmaLinux 9 betas': {linkable: false},
  'ALESCo': {path: '/alesco', linkable: true},
  'ALESCo Meeting Minutes': {path: '/alesco/meeting-minutes', linkable: true},
  'Contribute': {linkable: false},
  'Special interest groups (SIGs)': {path: '/sigs/', linkable: true},
  'The Process for Creating a New SIG* in the AlmaLinux Community': {path: '/sigs/ProcessForCreatingNewSIG', linkable: true},
  'Marketing': {path: '/sigs/Marketing', linkable: true},
  'Development': {linkable: false},
  'Private Keys': {linkable: false},
  'Documentation': {linkable: false},
  'Howto Series': {path: '/series/', linkable: true},
  'Nginx Series': {path: '/series/nginx/', linkable: true},
  'System Series': {path: '/series/system/', linkable: true},
  'Security Guides': {path: '/documentation/guides', linkable: true},
  'Installation': {linkable: false},
  'Cloud Images': {path: '/cloud/', linkable: true},
  'Generic Cloud (Cloud-init)': {linkable: false},
  'AWS': {linkable: false},
  'Containers': {path: '/containers/', linkable: true},
  'Foundation': {linkable: false},
  
   // Add more mappings for other pages here...
};

    const breadcrumbs = [];
    ['grandparent', 'parent', 'child'].forEach((level) => {
      if (frontmatter[level] && pathMap[frontmatter[level]]) {
        breadcrumbs.push({
          text: frontmatter[level],
          path: pathMap[frontmatter[level]].path,
          linkable: pathMap[frontmatter[level]].linkable,
        });
      }
    });

    breadcrumbs.push({
      text: frontmatter.title,
      path: context.parent.$route.path,
      linkable: false,  // Current page is usually not a link
    });

    return h(
      'nav',
      { class: 'breadcrumbs' },
      breadcrumbs.map((crumb, index) =>
        h('span', {}, [
          crumb.linkable
            ? h('router-link', { attrs: { to: crumb.path } }, crumb.text)
            : h('span', {}, crumb.text), // Render plain text if not linkable
          index < breadcrumbs.length - 1 ? ' > ' : '' 
        ])
      )
    );
  }
};
