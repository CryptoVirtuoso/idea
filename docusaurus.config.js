module.exports = {
  title: '舞动未来',
  tagline: 'WIKI',
  url: 'https://101010.cool',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cryptoascii', // Usually your GitHub org/user name.
  projectName: '101010', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content:
        '水友们，舞动未来即将开启，<a target="_blank" rel="noopener noreferrer" href="#">戳我进官网</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    navbar: {
      title: 'Wiki-舞动未来',
      logo: {
        alt: '舞动未来',
        src: 'img/teddy-bear.png',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/cryptoascii/idea',
          label: 'GitHub',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'xxx',
            },
            {
              label: 'Discord',
              href: 'xxx',
            },
            {
              label: 'Twitter',
              href: 'xxx',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cryptoascii/idea',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 2022-2025 舞起来`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cryptoascii/idea/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
