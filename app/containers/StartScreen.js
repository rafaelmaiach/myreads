// @flow
import * as React from 'react';
import moize from 'moize';
import withRouter from 'react-router-dom/withRouter';

import logoSvg from 'Assets/icons/logo.svg';

type Props = {
  history: Function,
}

const StartScreen = ({ history }: Props) => {
  const { userAuthenticated } = sessionStorage;

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
