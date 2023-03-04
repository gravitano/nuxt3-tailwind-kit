// const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    // '../components/**/*.stories.mdx',
    // '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../ui/components/**/*.stories.mdx',
    '../ui/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  // async viteFinal(config, { configType }) {
  //   return mergeConfig(config, {
  //     plugins: [
  //     ],
  //   });
  // },
};
