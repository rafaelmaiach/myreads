// @flow
import * as React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Loadable from 'react-loadable';

import Loading from 'Components/loading/Loading';

import AuthorQuotes from 'Components/access/AuthorQuotes';

type Props = {
  history: Function,
}

const AccessFormContainer = Loadable({
  loader: () => import(/* webpackChunkName: 'accessFormContainer' */ 'Components/access/FormContainer'),
  loading: Loading,
});

const AccessScreen = ({ history }: Props) => {
  const { userAuthenticated } = sessionStorage;

  if (userAuthenticated) {
    history.push('/main');
    return null;
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
            <AccessFormContainer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(AccessScreen);
