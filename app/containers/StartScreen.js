// @flow
import React from 'react';

import logoSvg from 'Assets/icons/logo.svg';

// TODO: Finish login page style and start funcionality

const StartScreen = ({ history }: { history: Function }) => (
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
        <button type="button" onClick={() => history.push('/auth')}>
          FIND A BOOK
        </button>
      </div>
    </section>
  </div>
);

export default StartScreen;
