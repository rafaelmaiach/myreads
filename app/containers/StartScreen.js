// @flow
import React from 'react';
import moize from 'moize';

import logoSvg from 'Assets/icons/logo.svg';

const StartScreen = ({ history }: { history: Function }) => {
  const { userAuthenticated } = sessionStorage;

  const redirectUser = () => {
    if (!userAuthenticated) {
      history.push('/auth');
      return;
    }

    history.push('/bookshelf');
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

export default moize.reactSimple(StartScreen);
