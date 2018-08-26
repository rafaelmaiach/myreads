import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { AuthProvider } from './components/control/AuthContext';
import ProtectedRoute from './components/control/ProtectedRoute';

import LoginScreen from './containers/LoginScreen';
import BookshelfScreen from './containers/BookshelfScreen';
import SearchScreen from './containers/SearchScreen';

import './index.scss';

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
