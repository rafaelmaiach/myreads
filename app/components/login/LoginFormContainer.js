// @flow
import * as React from 'react';
import styled from 'styled-components';

import LoginFormSignUp from './LoginFormSignUp';
import LoginFormSignIn from './LoginFormSignIn';

type State = {
  fullname: string,
  email: string,
  password: string,
  formType: string,
}

type FormFieldState = {
  value: string,
  dirty: boolean, // occurs when user changes the value
  error: string,
}

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  & button {
    width: 40%;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    background-color: #05386b;
    color: #edf5e1;

    &:hover {
      background-color: #4cc984;
      color: #05386b;
      cursor: pointer;
    }
  }
`;

const MemberInformation = styled.div`
    font-size: 14px;
    padding-top: 5px;

  & button {
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      color: #4cc984;
    }

    &:focus {
      outline: none;
    }
  }
`;

class LoginFormContainer extends React.Component<void, State> {
  state = {
    fullname: '',
    email: '',
    password: '',
    formType: 'signin',
  };

  // Using closure to create different function for each field
  updateStateFieldFor = (field: string) => (state: FormFieldState) => {
    const { value, error } = state;
    this.setState(() => ({ [field]: !error ? value : '' }));
  };

  changeToSignIn = () => this.setState(() => ({
    fullname: '',
    email: '',
    password: '',
    formType: 'signin',
  }));

  changeToSignUp = () => this.setState(() => ({
    fullname: '',
    email: '',
    password: '',
    formType: 'signup',
  }));

  changeForm = () => {
    const { formType } = this.state;
    if (formType === 'signup') {
      this.changeToSignIn();
      return;
    }

    this.changeToSignUp();
  }

  formAction = () => {
    const {
      fullname,
      email,
      password,
      formType,
    } = this.state;

    const isSignUp = formType === 'signup';
    const formIsValid = fullname && email && password;

    if (isSignUp) {
      if (formIsValid) {
        alert('Registered!');
        this.changeForm();
        return;
      }

      alert('Invalid form');
    }

    const validEmail = email === 'admin@email.com';
    const validPassword = password === 'admin';
    const signInValid = validEmail && validPassword;

    if (signInValid) alert('Login!');
  }

  updateFullname = this.updateStateFieldFor('fullname');

  updateEmail = this.updateStateFieldFor('email');

  updatePassword = this.updateStateFieldFor('password');

  render() {
    const {
      formType,
    } = this.state;

    const isSignUpForm = formType === 'signup';
    const buttonText = isSignUpForm ? 'SIGN UP' : 'SIGN IN';
    const memberText = isSignUpForm ? 'Already a member?' : 'Not a member?';
    const actionText = isSignUpForm ? 'Sign in' : 'Sign up';

    return (
      <React.Fragment>
        <Fields>
          {isSignUpForm
            ? (
              <LoginFormSignUp
                updateFullname={this.updateFullname}
                updateEmail={this.updateEmail}
                updatePassword={this.updatePassword}
              />)
            : (
              <LoginFormSignIn
                updateEmail={this.updateEmail}
                updatePassword={this.updatePassword}
              />)}
        </Fields>
        <ButtonContainer>
          <button className="login_button" type="button" onClick={this.formAction}>
            {buttonText}
          </button>
        </ButtonContainer>
        <MemberInformation>
          {memberText}
          <button type="button" onClick={this.changeForm}>
            {actionText}
          </button>
        </MemberInformation>
      </React.Fragment>
    );
  }
}

export default LoginFormContainer;
