import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Application from './Application';

/**
 * This index.js is the entrypoint for the application to enable hot load
 * when running the project in development mode
 */

const nodeEnv = process.env.NODE_ENV;
const isDevEnv = nodeEnv === 'development';

// Wrap the Application component to react-hot-loader HOC
const renderApp = Component => render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('root'),
);

renderApp(Application);

// If in dev mode, enable the hot load
if (isDevEnv && module.hot) {
  module.hot.accept('./Application', () => {
    renderApp(Application);
  });
}
