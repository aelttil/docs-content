import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  docSidebar: [
    {
      type: 'doc',
      id: 'home',
    },
    {
      type: 'doc',
      id: 'console/api',
    },
    // {
    //   type: 'category',
    //   label: 'FAQ',
    //   items: [
    //     'faq/general/general',
    //     'faq/issues',
    //     'faq/iam/iam',
    //   ],
    // },
    // {
    //   type: 'link', // Lien externe
    //   label: 'Visitez notre site web', // Texte affiché
    //   href: 'https://www.cloud-temple.com', // URL externe
    //   className: 'sidebar-external-link', // Classe personnalisée pour le style
    // },
    // {
    //   type: 'link',
    //   label: 'Cloud Temple sur GitHub', // Texte affiché
    //   href: 'https://github.com/cloud-temple', // URL du dépôt GitHub
    //   className: 'sidebar-github-link', // Classe CSS personnalisée
    // },
    {
      type: 'html', // Séparateur et titre
      value: `
        <hr class="sidebar-separator" />
        <h3 class="sidebar-title">Console</h3>
      `,
    },
    {
      type: 'category',
      label: 'Management',
      items: [
        'console/console',
      ],
    },
    {
      type: 'category',
      label: 'Organisations & Tenants',
      items: [
        'console/organisations',
        'console/tenants',
      ],
    },
    {
      type: 'category',
      label: 'IAM',
      items: [
        'console/accounts',
        'console/permissions',
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'console/iam/sso_aad',
            'console/iam/sso_adfs',
          ],
        },
      ],
    },
    {
      type: 'html',
      value: `
        <hr class="sidebar-separator" />
        <h3 class="sidebar-title">Products</h3>
      `,
    },
    {
      type: 'category',
      label: 'IaaS - Vmware',
      items: [
        'iaas_vmware/iaas_vmware',
        'iaas_vmware/concepts',
        'iaas_vmware/quickstart',
        'iaas_vmware/tutorials',
        'iaas_vmware/faq',
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      items: [
        {
          type: 'category',
          label: 'Object Storage',
          items: [
            'storage/oss/oss',
            'storage/oss/concepts',
            'storage/oss/quickstart',
            'storage/oss/tutorials',
            'storage/oss/faq',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Bastion',
      items: [
        'bastion/bastion',
        'bastion/concepts',
        'bastion/quickstart',
        'bastion/tutorials',
        'bastion/faq',
      ],
    },

    {
      type: 'category',
      label: 'Housing',
      items: [
        'housing/housing',
        'housing/concepts',
        'housing/quickstart',
        'housing/tutorials',
        'housing/faq',
      ],
    },

    // {
    //   type: 'category',
    //   label: 'PaaS',
    //   items: [
    //     'paas/concepts',
    //     'paas/openshift',
    //   ],
    // },

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