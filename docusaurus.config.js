module.exports = {
  title: 'Recipes',
  tagline: '',
  url: 'https://artflag.github.io',
  baseUrl: '/recipes/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'artflag', // Usually your GitHub org/user name.
  projectName: 'recipes', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Recipes',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/savoury/adjaruli',
          activeBasePath: 'docs',
          label: 'Savoury',
          position: 'left',
        },
        {
          to: 'docs/sweet/baklava-noix',
          activeBasePath: 'docs',
          label: 'Sweet',
          position: 'left',
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
};
