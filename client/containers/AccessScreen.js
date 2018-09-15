// @flow
import * as React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Loadable from 'react-loadable';

import Loading from 'Components/loading/Loading';

import AuthorQuotes from 'Components/access/AuthorQuotes';

type Props = {
  history: Function,
}

// Add loadable to access form
const AccessFormContainer = Loadable({
  loader: () => import(/* webpackChunkName: 'accessFormContainer' */ 'Components/access/FormContainer'),
  loading: Loading,
});

/**
 * @constructor AccessScreen
 * @param {object} history - History object
 * @description Renders the access screen
 */
const AccessScreen = ({ history }: Props) => {
  // Get the user info
  const userAuthenticated = localStorage.getItem('userAuthenticated');

  // If exists, the user is already logged in, just send to bookshelf page
  if (userAuthenticated) {
    history.push('/main');
    return null;
  }

  // Triggers the animation effect
  setTimeout(() => {
    const form = document.querySelector('.login-container__form');

    if (form) {
      form.classList.add('active');
    }
  }, 100);

  return (
    <div className="login-container">
      <section className="login-container__form">
        <div className="login-container__form__quotes">
          <div className="quotes__box">
            <AuthorQuotes />
          </div>
        </div>
        <div className="login-container__form__fields">
          <div className="fields__box">
            <AccessFormContainer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(AccessScreen);
