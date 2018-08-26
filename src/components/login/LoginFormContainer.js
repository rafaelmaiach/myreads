import React, { Component } from 'react';
import LoginFormSignUp from './LoginFormSignUp';

class LoginFormContainer extends Component {
  state = {
    type: 'signup', // # signin or signup
  }

  render() {
    const { type } = this.state;

    return (
      type === 'signup' && <LoginFormSignUp />
    );
  }
}

export default LoginFormContainer;
