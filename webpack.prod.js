const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const productionEnv = new webpack.EnvironmentPlugin({ NODE_ENV: 'production' });

const pathsToClean = [
  'dist',
];

const cleanOptions = {
  root: path.resolve(__dirname),
  exclude: [],
  verbose: true,
  dry: false,
};

const uglifySetup = new UglifyJSPlugin({
  uglifyOptions: {
    ie8: false,
    ecma: 8,
    output: {
      comments: false,
      beautify: false,
    },
    compress: { drop_console: true },
    warnings: false,
  },
  cache: true,
  parallel: true,
});

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-dom', 'react-router-dom'],
    app: './app/index.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  optimization: {
    minimize: true,
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    minimizer: [
      uglifySetup,
      new OptimizeCSSAssetsPlugin(),
    ],
    runtimeChunk: true,
    splitChunks: { chunks: 'all' },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.DefinePlugin({ productionEnv }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    uglifySetup,
    new MinifyPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'MyReads - Rafael Maia Chieregatto',
      template: 'public/index.html',
      favicon: 'app/assets/icons/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    new WebpackMd5Hash(),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      filename: '[path].gz[query]',
      algorithm: 'gzip',
    }),
  ],

  performance: {
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
};
