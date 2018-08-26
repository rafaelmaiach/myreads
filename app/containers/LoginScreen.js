import React from 'react';
import AuthorQuotes from 'Components/login/AuthorQuotes';
import LoginFormContainer from 'Components/login/LoginFormContainer';
import logoSvg from 'Assets/icons/logo.svg';

// TODO: Finish login page style and start funcionality

const LoginScreen = () => {
  const showForm = () => {
    const box = document.querySelector('.login-container__box');
    const form = document.querySelector('.login-container__form');
    box.classList.add('hidden');
    form.classList.add('active');
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
          <button type="button" onClick={showForm}>
            FIND A BOOK
          </button>
        </div>
      </section>
      <section className="login-container__form">
        <div className="login-container__form__quotes">
          <div className="quotes__box">
            <AuthorQuotes />
          </div>
        </div>
        <div className="login-container__form__fields">
          <div className="fields__box">
            <LoginFormContainer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
