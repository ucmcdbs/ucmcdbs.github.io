export default {
  lang: 'en-US',
  title: 'UCMCDBS',
  description: 'UCMCDBS Docs',
  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/assets/images/logo.svg',
      dark: '/assets/images/logo-white.svg',
      alt: 'UCMC'
    },
    nav: [
      { text: 'About', link: '/about/introduction' },
    ],
    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'Introduction', link: '/about/introduction' },
          { text: 'Getting Started', link: '/about/getting-started' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ucmcdbs' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present UCMC'
    },
  },
}
