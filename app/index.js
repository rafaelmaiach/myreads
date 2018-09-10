import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './Application';

const nodeEnv = process.env.NODE_ENV;

const renderApp = Component => render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('root'),
);

renderApp(App);

// Webpack Hot Module Replacement API
if (nodeEnv === 'development') {
  const { whyDidYouUpdate } = require('why-did-you-update'); // eslint-disable-line
  whyDidYouUpdate(React, {
    exclude: [
      /^Route/,
      /^Switch/,
      /^AuthProvider/,
    ],
  });

  if (module.hot) {
    module.hot.accept('./Application', () => {
      renderApp(App);
    });
  }
}
