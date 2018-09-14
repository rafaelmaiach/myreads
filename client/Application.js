import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { AuthProvider } from 'Components/control/AuthContext';
import ProtectedRoute from 'Components/control/ProtectedRoute';
import StartScreen from 'Containers/StartScreen';
import AccessScreen from 'Containers/AccessScreen';
import BookshelfScreen from 'Containers/BookshelfScreen';
import SearchScreen from 'Containers/SearchScreen';

import './index.scss';

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
        <Route path="/main" component={StartScreen} />
        <Route path="/auth" component={AccessScreen} />
        <ProtectedRoute exact path="/" component={BookshelfScreen} />
        <ProtectedRoute path="/search" component={SearchScreen} />
        <Redirect from="*" to="/" />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);

const isDevEnv = process.env.NODE_ENV === 'development';

// If it's running on development environment, enables hot load
const App = isDevEnv ? hot(module)(Application) : Application;

export default App;
