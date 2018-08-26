// @flow
import * as React from 'react';

// #TODO: Edit login and logout to use localStorage or browser cookie

type Props = {
  children: React.Node,
}

type State = {
  isUserAuthenticated: boolean,
}

// Create a context from ContextAPI to store user authentication value
const AuthContext = React.createContext();

/**
 * @constructor AuthProvider
 * @description Provides an authentication system for the application
 */
class AuthProvider extends React.Component<Props, State> {
  state = { isUserAuthenticated: false }

  login = () => {
    setTimeout(() => this.setState(() => ({ isUserAuthenticated: true })), 1000);
  }

  logout = () => {
    this.setState(() => ({ isUserAuthenticated: false }));
  }

  render() {
    const { children } = this.props;
    const { isUserAuthenticated } = this.state;

    const config = {
      isUserAuthenticated,
      login: this.login,
      logout: this.logout,
    };

    return (
      <AuthContext.Provider value={config}>
        {children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
