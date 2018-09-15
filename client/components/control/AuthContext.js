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
 * @class ProviderAuth
 * @description Provides an authentication system for the application
 */
class ProviderAuth extends React.Component<Props> {
  /**
   * @method ProviderAuth#login
   * @param {object} user - User information
   * @description Saves the user token and its information to localStorage. As well, this set the user
   * as authenticated, allowing it to stay connected
   */
  login = (user) => {
    const { token } = user;
    localStorage.setItem('userAuthenticated', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  /**
   * @method ProviderAuth#logout
   * @description Removes the user information from localStorage and redirect to main page
   */
  logout = () => {
    const { history } = this.props;
    localStorage.removeItem('userAuthenticated');
    localStorage.removeItem('token');
    history.push('/main');
  }

  /**
   * @method ProviderAuth#isUserAuthenticated
   * @description Check if the user is authenticated
   */
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

const AuthConsumer:Object = AuthContext.Consumer;

const AuthProvider = withRouter(ProviderAuth);

export { AuthProvider, AuthConsumer };
