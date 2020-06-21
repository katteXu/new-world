const webpack = require('webpack');
module.exports = {
  extends: "@snowpack/app-scripts-react",
  scripts: {
    "build:css": "postcss"
  },
  plugins: [
    [
      "@snowpack/plugin-webpack",
      {
        sourceMap: true,
        extendConfig: (config) => {
          return config;
        }
      }
    ]
  ]
}