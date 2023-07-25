const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    '@storybook/addon-storysource',
    // '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    'storybook-mobile',
    'storybook-preset-less',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];
    
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { modules: true, sourceMap: true },
        },{
          loader: 'sass-loader',
          options: { sourceMap: true, },
        },{
          loader: path.resolve('./.storybook/loaders/loader.js'),
          options: {},
        },
      ],
    });

    return config;
  },
}