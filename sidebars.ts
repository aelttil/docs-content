import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: 'doc',
      id: 'home', // Correspond à l'ID défini dans le frontmatter de la page
    },
    {
      type: 'link', // Lien externe
      label: 'Visitez notre site web', // Texte affiché
      href: 'https://www.cloud-temple.com', // URL externe
      className: 'sidebar-external-link', // Classe personnalisée pour le style
    },
    {
      type: 'link',
      label: 'Cloud Temple sur GitHub', // Texte affiché
      href: 'https://github.com/cloud-temple', // URL du dépôt GitHub
      className: 'sidebar-github-link', // Classe CSS personnalisée
    },
    {
      type: 'html', // Séparateur et titre
      value: `
        <hr class="sidebar-separator" />
        <h3 class="sidebar-title">Management</h3>
      `,
    },
    {
      type: 'category',
      label: 'Console',
      items: [
        'console/accounts',
        'console/api',
        'console/console',
        'console/howto',
        'console/status',
      ],
    },
    {
      type: 'html', // Séparateur et titre
      value: `
        <hr class="sidebar-separator" />
        <h3 class="sidebar-title">Products</h3>
      `,
    },
  
    {
      type: 'category',
      label: 'Bastion',
      items: [
        'bastion/bastion',
        'bastion/bastion_quickstart',
        'bastion/howto_bastion',
      ],
    },

    {
      type: 'category',
      label: 'IAAS',
      items: [
        'iaas/compute',
        'iaas/storage',
        'iaas/network',
        'iaas/metrics',
        'iaas/quickstart_iaas',
      ],
    },
    {
      type: 'category',
      label: 'PaaS',
      items: [
        'paas/concepts',
        'paas/openshift',
        'paas/s3',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general/general',
        'faq/issues',
        'faq/iam/iam',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      items: [
        'privacy',
      ],
    },
  ],
};

export default sidebars;