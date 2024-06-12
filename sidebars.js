/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    // {
    //   type: 'html',
    //   value: '<div class="sidebar-group-item"><span class="sidebar-group-item__icon">i</span>GETTING STARTED</div>',
    // },
    {
      type: 'html',
      value: '<div class="sidebar-group-item">GETTING STARTED</div>',
    },
    'index',
    {
      type: 'category',
      label: 'product-guides',
      items: [
         'product-guides/launch-and-connect-to-a-workspace',
        'product-guides/managing-recipes',
        'product-guides/managing-your-workspaces',
        'product-guides/using-a-workspace',
        'product-guides/writing-recipes',
       
        {
          type: 'category',
          label: 'getting-started',
          items: [
              'product-guides/getting-started/create-your-first-recipe',
              'product-guides/getting-started/inviting-teammates',
              'product-guides/getting-started/launch-your-first-workspace',
              'product-guides/getting-started/README',
          ]
        },
        {
          type: 'category',
          label: 'how-tos',
          items: [
              'product-guides/how-tos/connect-to-an-rds-instance',
              'product-guides/how-tos/README',
           ]
        },
        {
          type: 'category',
          label: 'settings',
          items: [
              'product-guides/settings/team-settings',
              'product-guides/settings/user-settings',
              'product-guides/settings/README',
           ]
        },
  
      ]
    },
    {
      type: 'category',
      label: 'references',
      items: [
          'references/cli-installation',
          'references/recipe-syntax',
      ]
    },
    {
      type: 'category',
      label: 'the basics',
      items: [
          'the-basics/terminology',
          'the-basics/use-cases',
      ]
    },
    {
      type: 'category',
      label: 'troubleshooting',
      items: [
          'troubleshooting/command-line',
          'troubleshooting/recipes',
          'troubleshooting/vs-code',
          'troubleshooting/web-console',
          'troubleshooting/workspaces',
      ]
    },
 
  ],
};

export default sidebars;
