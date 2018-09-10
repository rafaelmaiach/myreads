import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { AuthProvider } from 'Components/control/AuthContext';
import ProtectedRoute from 'Components/control/ProtectedRoute';
import StartScreen from 'Containers/StartScreen';
import AccessScreen from 'Containers/AccessScreen';
import BookshelfScreen from 'Containers/BookshelfScreen';
import SearchScreen from 'Containers/SearchScreen';

import './index.scss';

/**
 * @constructor App
 * @description Represents the application's main component.
 * It renders the specific component for each route defined
 */
const App = () => (
  <HashRouter>
    <AuthProvider>
      <Switch>
        <Route exact path="/" render={props => <StartScreen {...props} />} />
        <Route path="/auth" component={AccessScreen} />
        <ProtectedRoute path="/bookshelf" component={BookshelfScreen} />
        <ProtectedRoute path="/search" component={SearchScreen} />
        <Redirect from="*" to="/" />
      </Switch>
    </AuthProvider>
  </HashRouter>
);

export default App;