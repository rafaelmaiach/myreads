import React from 'react';

const showForm = () => {
  const el = document.querySelector('.login-container__form');
  el.classList.add('active');
};

const LoginScreen = () => (
  <div className="login-container">
    <div className="login-container__box">
      <div className="login-container__box__logo">
        <img src="./assets/icons/logo.svg" alt="myreads-logo" />
        <span>MYREADS</span>
      </div>
      <div className="login-container__box__button">
        <button type="button" onClick={showForm}>FIND A BOOK</button>
      </div>
    </div>
    <div className="login-container__form">
      <div>
        <h2>
          What state do you live in?
        </h2>
      </div>
      <div>
        <p>Denial. Miss Wormwood: I don't suppose I can argue with that.</p>
      </div>
    </div>
  </div>
);

export default LoginScreen;
