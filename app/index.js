import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const renderApp = Component => render(
  <AppContainer>
    <Component />
  </AppContainer>,
  document.getElementById('root'),
);

renderApp(App);

// Webpack Hot Module Replacement API
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}
