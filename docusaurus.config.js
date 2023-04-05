module.exports = {
  title: 'Recipes',
  tagline: '',
  url: 'https://artflag.github.io',
  baseUrl: '/recipes/',
  onBrokenLinks: 'throw',
  favicon: '/favicon-32x32.png',
  organizationName: 'artflag', // Usually your GitHub org/user name.
  projectName: 'recipes', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Recipes',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Savoury',
          position: 'left',
          type: 'doc',
          docId: 'savoury/gougere'
        },
        {
          label: 'Sweet',
          position: 'left',
          type: 'doc',
          docId: 'sweet/cookies'
        },
        {
          label: 'Bread',
          position: 'left',
          type: 'doc',
          docId: 'bread/brioche'
        },
        {
          label: 'Cocktails',
          position: 'left',
          type: 'doc',
          docId: 'cocktails/pisco-sour'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/artflag/recipes',
            },
            {
              label: 'Oven stuff',
              href: '/docs/oven',
            },
          ],
        },
      ],
      copyright: `Absolutely no copyright © ${new Date().getFullYear()} ArtFlag, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl:
            'https://github.com/artflag/recipes/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: '/recipes/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },
    {
      href: '/recipes/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32',
    },
    {
      href: '/recipes/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16',
    },
    {
      href: '/recipes/site.webmanifest',
      rel: 'manifest',
    },
    {
      href: '/recipes/safari-pinned-tab.svg',
      rel: 'mask-icon',
      color: '#5bbad5',
    },
  ],
};
