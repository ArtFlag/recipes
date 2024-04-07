import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Recipes',
  tagline: '',
  url: 'https://artflag.github.io',
  baseUrl: process.env.BASE_URL ?? '/',
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
          docId: 'pastry/bread/baguettes',
        },
        {
          label: 'Sweet',
          position: 'left',
          type: 'doc',
          docId: 'sweet/biscuits/chocolate-chip-cookies',
        },
        {
          label: 'Savoury',
          position: 'left',
          type: 'doc',
          docId: 'savoury/other/gougere',
        },
        {
          label: 'Cocktails',
          position: 'left',
          type: 'doc',
          docId: 'cocktails/other/pisco-sour',
        },
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
          routeBasePath: process.env.DOCS_PATH ?? '/recipes/',
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
