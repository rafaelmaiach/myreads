// @flow
import * as React from 'react';
import moize from 'moize';
import withRouter from 'react-router-dom/withRouter';

import logoSvg from 'Assets/icons/logo.svg';

type Props = {
  history: Function,
}

/**
 * @constructor StartScreen
 * @param {object} history - Browser history object
 * @description StartScreen is the start screen for the application. It shows the
 * app name and a button that sends user to authentication page or bookshelf page,
 * depending on the authenticated status.
 */
const StartScreen = ({ history }: Props) => {
  // Get the authenticate status from sessionStorage
  const { userAuthenticated } = sessionStorage;

  // Redirect to auth page if not authenticated and to bookshelf page if it is
  const redirectUser = () => {
    if (!userAuthenticated) {
      history.push('/auth');
      return;
    }

    history.push('/');
  };

  return (
    <div className="login-container">
      <section className="login-container__box">
        <div className="login-container__box__logo">
          <img
            className="login-container__box__logo--img"
            src={logoSvg}
            alt="myreads-logo"
          />
          <h1 className="login-container__box__logo--text anim-typewriter">
            MYREADS
          </h1>
        </div>
        <div className="login-container__box__button">
          <button type="button" onClick={redirectUser}>
            FIND A BOOK
          </button>
        </div>
      </section>
    </div>
  );
};

export default withRouter(moize.reactSimple(StartScreen));
