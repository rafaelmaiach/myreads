// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
}

// Create a context from ContextAPI to store user authentication value
const AuthContext = React.createContext();

/**
 * @constructor AuthProvider
 * @description Provides an authentication system for the application
 */
class AuthProvider extends React.Component<Props> {
  setupUserList = () => {
    const usersList = localStorage.getItem('usersList');

    if (!usersList) {
      const adminUser = {
        fullname: 'admin',
        email: 'admin@admin.com',
        password: 'adminpassword',
        token: '570s76vv',
      };

      localStorage.setItem('usersList', JSON.stringify([adminUser]));
    }
  }

  login = (user) => {
    const { token } = user;
    localStorage.setItem('userAuthenticated', true);
    localStorage.setItem('token', token);
  }

  logout = () => {
    localStorage.removeItem('userAuthenticated');
  }

  isUserAuthenticated = () => localStorage.getItem('userAuthenticated');

  render() {
    const { children } = this.props;
    this.setupUserList();

    const config = {
      isUserAuthenticated: this.isUserAuthenticated,
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
