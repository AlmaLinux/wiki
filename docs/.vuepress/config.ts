import { defineConfig } from 'vuepress/config'

import * as zhConfig from './config/zh'
import * as enConfig from './config/en'

export default defineConfig(({
  title: 'AlmaLinux Wiki',
  description: 'AlmaLinux OS Documentation',
  head: [ ['script', {}, `
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
`],
    ['link', { rel: "shortcut icon", type: 'image/png', href: "/images/logo.png"}],
  ],
  locales: {
    '/': {
      lang: 'en',
      title: 'AlmaLinux Wiki',
      description: 'AlmaLinux OS Documentation',
    },
    '/zh/': {
      lang: 'zh',
      title: 'AlmaLinux Wiki',
      description: 'AlmaLinux OS 文档',
    }
  },
  themeConfig: {
    logo: '/images/logo.png',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: enConfig.navbar,
        sidebar: enConfig.sidebar
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: zhConfig.navbar,
        sidebar: zhConfig.sidebar
      }
    },
    // AlmaLinux organization on GitHub
    repo: 'AlmaLinux/',
    // wiki repository settings
    docsRepo: 'AlmaLinux/wiki',
    docsDir: 'docs',
    docsBranch: 'master',
    // editing works only for users with the repository write-access so we
    // disabled it to avoid confusion
    editLinks: false
  },
}))