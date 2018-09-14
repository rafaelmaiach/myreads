// @flow
import * as React from 'react';
import withRouter from 'react-router-dom/withRouter';

type Props = {
  children: React.Node,
  history: Function,
}

// Create a context from ContextAPI to store user authentication value
const AuthContext = React.createContext();

/**
 * @constructor ProviderAuth
 * @description Provides an authentication system for the application
 */
class ProviderAuth extends React.Component<Props> {
  login = (user) => {
    const { token } = user;
    localStorage.setItem('userAuthenticated', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  logout = () => {
    const { history } = this.props;
    localStorage.removeItem('userAuthenticated');
    localStorage.removeItem('token');
    history.push('/main');
  }

  isUserAuthenticated = () => localStorage.getItem('userAuthenticated');

  render() {
    const { children } = this.props;

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

const AuthProvider = withRouter(ProviderAuth);

export { AuthProvider, AuthConsumer };
