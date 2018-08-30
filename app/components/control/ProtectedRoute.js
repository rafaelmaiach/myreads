import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext';

type Props = {
  component: React.Node,
}

/**
 * @constructor ProtectedRoute
 * @description This component gets the information if user is authenticated from the ReactContext,
 * and renders a component if he is or redirect to login screen if not.
 * @param {Component} component - Component to be rendered if user is authenticated
 */
const ProtectedRoute = ({ component: Component, ...rest }: {component: Props}) => (
  <AuthConsumer>
    {({ isUserAuthenticated }) => (
      <Route
        render={props => isUserAuthenticated()
          ? <Component {...props} />
          : <Redirect to="/" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
