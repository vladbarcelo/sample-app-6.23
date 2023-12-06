const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  webpack: (config, options, webpack) => {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          terserOptions: {
            keep_classnames: true,
            keep_fnames: true,
          },
        }),
      ],
    };

    config.plugins.push(new ESLintPlugin({
      fix: true
    }))

    return config;
  }
}