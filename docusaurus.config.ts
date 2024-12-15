// Obtenir le nom de la branche depuis les variables d'environnement (par défaut à "main")
const branch = process.env.BRANCH || 'main'; 

// Définir la base URL dynamiquement en fonction de la branche
const baseUrl = branch === 'dev' ? '/dev/' : '/docs-content/';

const config = {
  title: 'Documentation Cloud Temple',
  tagline: 'Tout ce dont vous avez besoin pour tirer le meilleur parti des produits Cloud Temple.',
  favicon: 'img/favicon.ico',

  future: {
    experimental_faster: true,
  },
  trailingSlash: true,
  url: 'https://aelttil.github.io', // URL de base pour GitHub Pages
  baseUrl, // Utiliser la base URL dynamique

  organizationName: 'aelttil',
  projectName: 'docs-content',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: { htmlLang: 'en' },
      fr: { htmlLang: 'fr' },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/aelttil/docs-content/edit/main/', // Lien d'édition
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Cloud Temple Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/cloud-temple',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/home/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/cloud-temple/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cloud-temple',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

export default config;
