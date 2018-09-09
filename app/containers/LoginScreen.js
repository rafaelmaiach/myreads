import React from 'react';
import { Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from 'Components/loading/Loading';

import AuthorQuotes from 'Components/access/AuthorQuotes';

const LoginFormContainer = Loadable({
  loader: () => import(/* webpackChunkName: 'accessFormContainer' */ 'Components/access/FormContainer'),
  loading: Loading,
});

const LoginScreen = (props) => {
  const { userAuthenticated } = sessionStorage;

  if (userAuthenticated) {
    return <Redirect to="/bookshelf" />;
  }

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
            <LoginFormContainer {...props} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
