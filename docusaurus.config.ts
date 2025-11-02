import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Recipes',
  tagline: '',
  url: 'https://artflag.github.io',
  baseUrl: 'recipes/',
  onBrokenLinks: 'throw',
  favicon: '/favicon-32x32.png',
  organizationName: 'artflag',
  projectName: 'recipes',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Recipes',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Bread',
          position: 'left',
          type: 'doc',
          docId: '/category/bread',
        },
        {
          label: 'Sweet',
          position: 'left',
          type: 'doc',
          docId: '/category/biscuits',
        },
        {
          label: 'Savoury',
          position: 'left',
          type: 'doc',
          docId: '/category/other',
        },
        {
          label: 'Cocktails',
          position: 'left',
          type: 'doc',
          docId: '/category/other-1',
        },
        {
          label: 'Tags',
          position: 'left',
          to: '/tags',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'General',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/artflag/recipes',
            },
            {
              label: 'Oven stuff',
              href: '/recipes/oven',
            },
            {
              label: 'Temperatures',
              href: '/recipes/temperatures',
            },
            {
              label: 'Notes',
              href: '/recipes/notes',
            },
            {
              label: 'Sauces',
              href: '/recipes/sauces',
            },
            {
              label: 'Grill',
              href: '/recipes/grill',
            },
          ],
        },
        {
          title: 'Sweet',
          items: [
            {
              label: 'Pâtes',
              href: '/recipes/category/p%C3%A2tes',
            },
            {
              label: 'Biscuits',
              href: '/recipes/category/biscuits',
            },
            {
              label: 'Tartes',
              href: '/recipes/category/tartes',
            },
            {
              label: 'Gâteaux',
              href: '/recipes/category/g%C3%A2teaux',
            },
            {
              label: 'Autres',
              href: '/recipes/category/autres',
            },
          ],
        },
        {
          title: 'Savoury',
          items: [
            {
              label: 'Stocks',
              href: '/recipes/category/stocks',
            },
            {
              label: 'Indian',
              href: '/recipes/category/indian',
            },
            {
              label: 'Soups',
              href: '/recipes/category/soups',
            },
            {
              label: 'Autres',
              href: '/recipes/category/other',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus`,
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/artflag/recipes/edit/master/',
          routeBasePath: '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
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
  markdown: {
    // https://docusaurus.io/docs/migration/v3#using-the-mdx-extension
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  },
}

export default config
