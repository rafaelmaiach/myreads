/* eslint-disable global-require */
require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const webpack = require('webpack');
const config = require('../webpack.config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const isInProduction = process.env.NODE_ENV === 'production';

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) { return false; }
  return compression.filter(req, res);
};

app.use(compression({ filter: shouldCompress }));

if (isInProduction) {
  app.get('/dist/*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

if (!isInProduction) {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: 'warn',
    silent: true,
    stats: 'errors-only',
  }));

  app.use(webpackHotMiddleware(compiler));
}

const publicPath = express.static(path.join(__dirname, '../dist'));

app.use('/', publicPath);

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log(`Server starting on: ${process.env.PORT || 3000}`);
});
