import React from 'react';
import Loadable from 'react-loadable';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { AuthProvider } from 'Components/control/AuthContext';
import AccessScreen from 'Containers/AccessScreen';
import ProtectedRoute from 'Components/control/ProtectedRoute';
import Loading from 'Components/loading/Loading';

import './index.scss';

const StartScreenLoadable = Loadable({
  loader: () => import(/* webpackChunkName: 'startScreenContainer' */ 'Containers/StartScreen'),
  loading: Loading,
});

const BookshelfScreenLoadable = Loadable({
  loader: () => import(/* webpackChunkName: 'bookshelfScreenContainer' */ 'Containers/BookshelfScreen'),
  loading: Loading,
});

const SearchScreenLoadable = Loadable({
  loader: () => import(/* webpackChunkName: 'searchScreenContainer' */ 'Containers/SearchScreen'),
  loading: Loading,
});

/**
 * @constructor Application
 * @description Represents the application's main component.
 * It renders the specific component for each route defined
 * It's wrapped by AuthProvider from ContextAPI to enable access system to work on some components
 */
const Application = () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path="/main" component={StartScreenLoadable} />
        <Route path="/auth" component={AccessScreen} />
        <ProtectedRoute exact path="/" component={BookshelfScreenLoadable} />
        <ProtectedRoute path="/search" component={SearchScreenLoadable} />
        <Redirect from="*" to="/" />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);

const isDevEnv = process.env.NODE_ENV === 'development';

// If it's running on development environment, enables hot load
const App = isDevEnv ? hot(module)(Application) : Application;

export default App;
