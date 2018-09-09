/* eslint-disable global-require */
const autoprefixer = require('autoprefixer');
const path = require('path');
const merge = require('webpack-merge');

const defaultConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: true,
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('sass-loader'),
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [],
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      Src: path.resolve(__dirname, 'app'),
      Containers: path.resolve(__dirname, 'app', 'containers'),
      Components: path.resolve(__dirname, 'app', 'components'),
      Styles: path.resolve(__dirname, 'app', 'styles'),
      Assets: path.resolve(__dirname, 'app', 'assets'),
      Utils: path.resolve(__dirname, 'app', 'utils'),
    },
  },
};

const isProductionEnv = process.env.NODE_ENV === 'production';

let webpackConfig = null;

if (isProductionEnv) {
  const prodOptions = require('./webpack.prod');
  const prodConfig = merge(defaultConfig, prodOptions);
  webpackConfig = Object.assign({}, prodConfig);
} else {
  const devOptions = require('./webpack.dev');
  const devConfig = merge(defaultConfig, devOptions);
  webpackConfig = Object.assign({}, devConfig);
}

module.exports = webpackConfig;
