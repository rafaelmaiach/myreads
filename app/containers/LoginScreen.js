import React from 'react';
import Loadable from 'react-loadable';

import Loading from 'Components/loading/Loading';

import AuthorQuotes from 'Components/login/AuthorQuotes';

const LoginFormContainer = Loadable({
  loader: () => import(/* webpackChunkName: 'loginFormContainer' */ '../components/login/LoginFormContainer'),
  loading: Loading,
});

// TODO: Finish login page style and start funcionality

const LoginScreen = () => {
  setTimeout(() => {
    const form = document.querySelector('.login-container__form');
    form.classList.add('active');
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
            <LoginFormContainer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
