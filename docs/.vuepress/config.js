module.exports = {
  title: "AlmaLinux Wiki",
  description: "AlmaLinux OS Documentation",
  head: [
    [
      "script",
      {},
      `
      var _paq = window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://matomo.almalinux.org/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '5']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    `,
    ],
    [
      "link",
      { rel: "shortcut icon", type: "image/png", href: "/images/logo.png" },
    ],
  ],
  base: "/",
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          var dayjs = require("dayjs");
          // Omit time from last updated
          return dayjs(timestamp).format("YYYY-MM-DD");
        },
      },
    ],
  ],
  themeConfig: {
    lastUpdated: true,
    logo: "/images/logo.png",
    nav: [
      { text: "Home", link: "https://almalinux.org/" },
      { text: "Chat", link: "https://chat.almalinux.org/" },
      { text: "Mailing Lists", link: "https://lists.almalinux.org/" },
      { text: "Bugs", link: "https://bugs.almalinux.org/" },
    ],
    sidebar: [
      {
        title: "About",
        path: "/",
      },
      {
        title: "Release Notes",
        path: "/release-notes/",
        children: [
          "/release-notes/10.0",
          "/release-notes/9.6",
          "/release-notes/8.10",
          "/release-notes/9.7-beta",
          "/release-notes/kitten-10",
          {
            title: "Older AlmaLinux 10 releases",
            children: [
              {
                title: "AlmaLinux 10 betas",
                children: ["/release-notes/10.0-beta"],
              },
            ],
          },
          {
            title: "Older AlmaLinux 9 releases",
            children: [
              "/release-notes/9.5",
              "/release-notes/9.4",
              "/release-notes/9.3",
              "/release-notes/9.2",
              "/release-notes/9.1",
              "/release-notes/9.0",
              {
                title: "AlmaLinux 9 betas",
                children: [
                  "/release-notes/9.6-beta",
                  "/release-notes/9.5-beta",
                  "/release-notes/9.4-beta",
                  "/release-notes/9.3-beta",
                  "/release-notes/9.2-beta",
                  "/release-notes/9.1-beta",
                  "/release-notes/9.0-beta",
                ],
              },
            ],
          },
          {
            title: "Older AlmaLinux 8 releases",
            children: [
              "/release-notes/8.9",
              "/release-notes/8.8",
              "/release-notes/8.7",
              "/release-notes/8.6",
              "/release-notes/8.5-ppc",
              "/release-notes/8.5",
              "/release-notes/8.4-arm",
              "/release-notes/8.4",
              "/release-notes/8.3",
              {
                title: "AlmaLinux 8 betas",
                children: [
                  "/release-notes/8.10-beta",
                  "/release-notes/8.9-beta",
                  "/release-notes/8.8-beta",
                  "/release-notes/8.7-beta",
                  "/release-notes/8.6-beta",
                  "/release-notes/8.5-beta",
                  "/release-notes/8.5-beta-ppc",
                  "/release-notes/8.4-beta-arm",
                  "/release-notes/8.4-beta",
                  "/release-notes/8.3-rc",
                  "/release-notes/8.3-beta",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "ALESCo",
        path: "/alesco",
        children: [
          {
            title: "Meeting Minutes",
            path: "/alesco/meeting-minutes",
          },
        ],
      },
      {
        title: "Contribute",
        path: "/Contribute",
        children: [
          "/Contribute",
          "/Contribute-to-AlmaLinux-Build-System",
          "/Contribute-to-Documentation",
          "/Mirrors",
          "/Contribute-to-Packaging",
          "/Contribute-to-Testing",
          "/Help-translating-site",
          {
            title: "Special interest groups (SIGs)",
            path: "/sigs/",
            children: [
              "/sigs/Atomic",
              "/sigs/Build-System",
              "/sigs/Cloud",
              "/sigs/Core",
              "/sigs/HPCandAI",
              "/sigs/Infrastructure",
              "/sigs/LiveMedia",
              {
                title: "The Marketing SIG",
                path: "/sigs/Marketing",
                children: ["/sigs/marketing/indico"],
              },
              "/sigs/Migration",
              "/sigs/Certification",
              "/sigs/ProcessForCreatingNewSIG",
            ],
          },
        ],
      },
      {
        title: "Development",
        path: "/development/AlmaLinux-Build-System",
        children: [
          "/development/AlmaLinux-Build-System",
          "/development/almalinux-os-kitten-10",
          "/documentation/package-building-guide",
          "/development/building-almalinux-iso-locally",
          "/development/Modified-packages",
          "/development/Packaging",
          {
            title: "Private Keys",
            children: [
              "/development/private-keys/secure-boot",
              "/development/private-keys/package-signing",
            ],
          },
        ],
      },
      {
        title: "Documentation",
        path: "/Comparison",
        children: [
          "/Comparison",
          "/documentation/nvidia",
          "/FAQ",
          "/Howto",
          {
            title: "openQA Guide",
            path: "/development/openQA",
          },
          {
            title: "Howto Series",
            path: "/series/",
            children: [
              "/series/LAMP-server",
              {
                title: "Nginx Series",
                path: "/series/nginx/",
                children: [
                  "/series/nginx/NginxSeriesA01",
                  "/series/nginx/NginxSeriesA02R8",
                  "/series/nginx/NginxSeriesA02R91",
                  "/series/nginx/NginxSeriesA02R92",
                  "/series/nginx/NginxSeriesA03",
                  "/series/nginx/NginxSeriesA04P1",
                ],
              },
              {
                title: "System Series",
                path: "/series/system/",
                children: [
                  "/series/system/SystemSeriesA01",
                  "/series/system/SystemSeriesA02",
                  "/series/system/SystemSeriesA03",
                  "/series/system/SystemSeriesA03R8",
                  "/series/system/SystemSeriesA03R9",
                  "/series/system/SystemSeriesA04",
                  "/series/system/SystemSeriesA05",
                  "/series/system/SystemSeriesA06",
                  "/series/system/SystemSeriesA07",
                  "/series/system/SystemSeriesA08",
                  "/series/system/SystemSeriesA09",
                  "/series/system/SystemSeriesA10",
                ],
              },
            ],
          },
          {
            title: "Security Guides",
            path: "/documentation/guides",
            children: [
              "/documentation/openscap-guide",
              "/documentation/openscap-guide-for-9",
              "/documentation/oval-streams",
              "/documentation/sbom-guide",
              "/documentation/errata",
            ],
          },
        ],
      },
      {
        title: "Installation",
        path: "/documentation/installation-guide",
        children: [
          "/documentation/installation-guide",
          "/documentation/after-installation-guide",
          "/documentation/wsl",
          {
            title: "Live Media",
            path: "/LiveMedia",
          },
          "/documentation/raspberry-pi",
          "/installation/vagrant-boxes",
          {
            title: "Cloud Images",
            path: "/cloud",
            children: [
              "/cloud/cloud-changelog",
              {
                title: "Generic Cloud (Cloud-init)",
                path: "/cloud",
                children: [
                  "/cloud/Generic-cloud",
                  "/cloud/Generic-cloud-on-local",
                ],
              },
              {
                title: "AWS",
                path: "/cloud",
                children: ["/cloud/AWS", "/cloud/EC2-instance-connect"],
              },
              "/cloud/Azure",
              "/cloud/Google",
              "/cloud/OCI",
              "/cloud/OpenNebula",
            ],
          },
          {
            title: "Containers",
            path: "/containers",
            children: ["/containers/docker-images"],
          },
          {
            title: "Repositories",
            path: "/repos/",
            children: [
              "/repos/AlmaLinux",
              "/repos/CentOS",
              "/repos/Extras",
              "/repos/Synergy",
            ],
          },
        ],
      },
      {
        title: "Migration",
        path: "/migration",
        children: [
          "/documentation/migration-guide",
          {
            title: "ELevate Project",
            path: "/elevate/",
            children: [
              "/elevate/ELevate-quickstart-guide",
              "/elevate/ELevating-CentOS7-to-AlmaLinux-10",
              "/elevate/ELevating-CentOS6-to-CentOS7",
              "/elevate/ELevate-offline-guide",
              "/elevate/ELevate-testing-guide",
              "/elevate/ELevate-NG-testing-guide",
              "/elevate/ELevate-frequent-issues",
              "/elevate/Contribution-guide",
              "/elevate/Changelog",
            ],
          },
        ],
      },
      {
        title: "The Foundation",
        path: "/Transparency",
        children: [
          "foundation/memberbenefits",
          {
            title: "Elections",
            path: "/foundation/elections/",
            children: [
              "/Election2022",
              "/election2023",
              "/Election2025",
              "/foundation/elections/processesandterms",
            ],
          },
          "/policies/expense_policy",
          "/gsoc",
        ],
      },
      "/Help-and-Support",
    ],
    // AlmaLinux organization on GitHub
    repo: "AlmaLinux/",
    // wiki repository settings
    docsRepo: "AlmaLinux/wiki",
    docsDir: "docs",
    docsBranch: "master",
    // editing works only for users with the repository write-access so we
    // disabled it to avoid confusion
    editLinks: false,
  },
};
