const sidebars = {
  docs: [
    'Muses-online',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'installation',
        'configuration',
        'playground',
        'typescript-support',
      ],
    },
  ],
};
module.exports = sidebars;