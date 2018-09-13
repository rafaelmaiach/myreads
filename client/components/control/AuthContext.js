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
    const usersList = sessionStorage.getItem('userList');

    if (!usersList) {
      const adminUser = {
        fullname: 'admin',
        email: 'admin@admin.com',
        password: 'adminpassword',
      };

      sessionStorage.setItem('usersList', JSON.stringify([adminUser]));
    }
  }

  login = () => {
    sessionStorage.setItem('userAuthenticated', true);
  }

  logout = () => {
    sessionStorage.removeItem('userAuthenticated');
  }

  isUserAuthenticated = () => sessionStorage.getItem('userAuthenticated');

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
