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
      { text: 'Bugs', link: 'https://bugs.almalinux.org/' }
    ],
    sidebar: [
      '/',
      {
        title: 'Release Notes',
        children: [
          '/release-notes/8.4-arm',
          '/release-notes/8.4',
          '/release-notes/8.4-beta-arm',
          '/release-notes/8.4-beta',
          '/release-notes/8.3',
          '/release-notes/8.3-rc',
          '/release-notes/8.3-beta'
        ]
      },
      {
        title: 'Cloud',
        children: [
          '/cloud/AWS',
          '/cloud/Azure',
          '/cloud/Generic-cloud',
          '/cloud/Generic-cloud-on-local',
          '/cloud/OpenNebula'
        ]
      },
      '/LiveMedia',
      {
        title: 'Special interest groups',
        path: '/sigs/',
        children: [
          '/sigs/Core',
          '/sigs/Cloud',
          '/sigs/LiveMedia',
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
      {
        title: 'Development',
        children: [
          '/development/Packaging'
        ]
      },
      '/Mirrors',
      '/FAQ',
      '/Comparison',
      '/Howto',
      '/Contribute'
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
