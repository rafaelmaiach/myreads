/* eslint-disable global-require */
require('dotenv').config();

const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const bodyParser = require('body-parser');
const compression = require('compression');
const webpack = require('webpack');
const config = require('../webpack.config');

const app = express();

const isInProduction = process.env.NODE_ENV === 'production';

const publicDir = path.join(__dirname, '../public');
const clientDir = path.join(__dirname, '../client');
const publicPath = expressStaticGzip(publicDir);

const nodeModules = express.static(path.join(__dirname, '../node_modules'));

app.use('/public', publicPath);
app.use('/node_modules', nodeModules);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
const viewsProd = path.join(publicDir, 'views');
const viewsDev = path.join(clientDir, 'views/dev');
const viewsPath = (isInProduction) ? viewsProd : viewsDev;
app.set('views', viewsPath);

app.use(compression());

if (isInProduction) {
  app.get('/public/*.js', (req, res, next) => {
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

app.get('/:page?', (_, res) => res.render('index'));

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log(`Server starting on: ${process.env.PORT || 3000}`);
});
