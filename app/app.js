import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from 'Components/loading/Loading';

import { AuthProvider } from 'Components/control/AuthContext';
import ProtectedRoute from 'Components/control/ProtectedRoute';

import './index.scss';

const LoginScreen = Loadable({
  loader: () => import(/* webpackChunkName: 'loginScreen' */ './containers/LoginScreen'),
  loading: Loading,
});

const BookshelfScreen = Loadable({
  loader: () => import(/* webpackChunkName: 'bookshelfScreen' */ 'Containers/BookshelfScreen'),
  loading: Loading,
});

const SearchScreen = Loadable({
  loader: () => import(/* webpackChunkName: 'searchScreen' */ 'Containers/SearchScreen'),
  loading: Loading,
});

// #TODO: Create 404 page and change Redirect to redirect to it

/**
 * @constructor App
 * @description Represents the application's main component.
 * It renders the specific component for each route defined
 */
const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <ProtectedRoute path="/bookshelf" component={BookshelfScreen} />
        <ProtectedRoute path="/search" component={SearchScreen} />
        <Redirect from="*" to="/" />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
