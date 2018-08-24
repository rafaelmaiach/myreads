import React from 'react';
import AuthorQuotes from '../components/login/AuthorQuotes';
import LoginForm from '../components/login/LoginForm';

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
            src="./assets/icons/logo.svg"
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
            <LoginForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
