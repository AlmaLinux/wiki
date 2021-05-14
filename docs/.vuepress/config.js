module.exports = {
  title: 'AlmaLinux Wiki',
  description: 'The AlmaLinux project documentation',
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
        title: 'Cloud',
        children: [
          '/cloud/AWS'
        ]
      },
      {
        title: 'Release notes',
        children: [
          '/release-notes/8.3-beta',
          '/release-notes/8.3-rc',
          '/release-notes/8.3',
          '/release-notes/8.4-beta'
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
      '/Contributing to the Wiki'
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
