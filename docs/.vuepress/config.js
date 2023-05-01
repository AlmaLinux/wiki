
module.exports = {
  title: 'AlmaLinux Wiki',
  description: 'AlmaLinux OS Documentation',
  head: [
    ['link', { rel: "shortcut icon", type: 'image/png', href: "/images/logo.png"}],
  ],
  base: '/',
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: 'https://almalinux.org/' },
      { text: 'Chat', link: 'https://chat.almalinux.org/' },
      { text: 'Mailing Lists', link: 'https://lists.almalinux.org/' },
      { text: 'Bugs', link: 'https://bugs.almalinux.org/' }
    ],
    sidebar: [
      '/',
      '/Contribute', 
             {
                title: 'Development',
                path: '/development/',
                children: [
                  '/documentation/building-packages-guide',
                  '/development/Packaging',
                ]
             },
       {
           title: 'Documentation',
           path: '/documentation',
            children: [
            '/FAQ',
            {
              title: 'General Guides',
                path: '/documentation/guides',
                children: [
                  '/documentation/installation-guide',
                  '/documentation/raspberry-pi',
                  '/documentation/wsl',
                ]
            },
            {
                title: 'Howto Series',
                path: '/series/',
                children: [
                  '/series/NginxSeriesA01',
                  '/series/NginxSeriesA01R8',
                  '/series/NginxSeriesA01R9',
                  '/series/NginxSeriesA02'
                ]
            },
            {
                title: 'Security Guides',
                path: '/documentation/guides',
                children: [
                  '/documentation/openscap-guide',
                  '/documentation/openscap-guide-for-9',
                  '/documentation/oval-streams',
                  '/documentation/sbom-guide'
                ]
            },
            {
                title: 'Some External Howtos',
                path: '/Howto',
            }
          ]
      },
      {
        title: 'Installation',
        sidebarDepth: 2,
        children: [
         '/documentation/installation-guide',
          { 
            title: 'Live Media',
            path: '/LiveMedia',
          },
          '/Mirrors',
          {
            title: 'Cloud',
            path : '/cloud',
            children: [
              '/cloud/AWS',
              '/cloud/Azure',
              '/cloud/Google',
              '/cloud/Generic-cloud',
              '/cloud/Generic-cloud-on-local',
              '/cloud/OpenNebula',
              '/cloud/OCI'
            ]
        },
        {
            title: 'Containers',
            path: '/containers',
            children: [
              'containers/docker-images'
            ]
        },
        {
            title: 'Repositories',
            path: '/repos/',
            children:[
              '/repos/AlmaLinux',
              '/repos/CentOS',
              '/repos/Extras',
            ]
           },
         ]
      },
      {
         title: 'Migration',
         path: '/migration',
         children: [
           '/documentation/migration-guide',
           {
              title: 'ELevate Project',
              path: '/elevate/',
              children: [
                '/elevate/ELevate-quickstart-guide',
                '/elevate/ELevate-testing-guide',
                '/elevate/Contribution-guide',
                '/elevate/ELevate-frequent-issues'
              ]
           },
         ]
      },
      {
          title: 'Technical',
          path: '/technical',
          children: [
            '/documentation/errata',
             '/development/Modified-packages',
             '/Comparison',
             '/development/openQA',
             {
                title: 'Release Notes',
                path: '/release-notes/',
                children: [
                  '/release-notes/9.1',
                  '/release-notes/8.7',
                  '/release-notes/9.2-beta',
                  '/release-notes/8.8-beta',
                  '/release-notes/9.0',
                  '/release-notes/8.6',
                  '/release-notes/9.1-beta',
                  '/release-notes/8.7-beta',
                  '/release-notes/9.0-beta',
                  '/release-notes/8.6-beta',
                  '/release-notes/8.5-ppc',
                  '/release-notes/8.5',
                  '/release-notes/8.5-beta-ppc',
                  '/release-notes/8.5-beta',
                  '/release-notes/8.4-arm',
                  '/release-notes/8.4',
                  '/release-notes/8.4-beta-arm',
                  '/release-notes/8.4-beta',
                  '/release-notes/8.3',
                  '/release-notes/8.3-rc',
                  '/release-notes/8.3-beta'
                ]
             },
         ]
      },
      {
        title: 'The Foundation',
        path: '/foundation',
        children: [
          '/Election2022',
          '/gsoc',
          '/Transparency',
           {
                title: 'Special interest groups',
                path: '/sigs/',
                children: [
                  '/sigs/Core',
                  '/sigs/Infrastructure',
                  '/sigs/Cloud',
                  '/sigs/Build-System',
                  '/sigs/LiveMedia',
                  '/sigs/Migration',
                  '/sigs/ProcessForCreatingNewSIG',
                ]
            },
         ]
       },
    ],
    // AlmaLinux organization on GitHub
    repo: 'AlmaLinux/',
    // wiki repository settings
    docsRepo: 'AlmaLinux/wiki',
    docsDir: 'docs',
    docsBranch: 'master',
    // editing works only for users with the repository write-access so we
    // disabled it to avoid confusion
    editLinks: false
  }
}
