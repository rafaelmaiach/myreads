// @flow
import * as React from 'react';
import {
  Fields,
  ButtonContainer,
  MemberInformation,
  CloseForm,
} from 'Styles/components/login/_LoginFormContainer';

import { AuthConsumer } from 'Components/control/AuthContext';
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

class LoginFormContainer extends React.Component<void, State> {
  state = {
    fullname: '',
    email: '',
    password: '',
    formType: 'signin',
  };

  returnStartScreen = () => {
    const { history } = this.props;
    history.push('/');
  }

  // Using closure to create different function for each field
  updateStateFieldFor = (field: string) => (state: FormFieldState) => {
    const { value, error } = state;
    this.setState(() => ({ [field]: !error ? value : '' }));
  };

  toggleForm = () => this.setState(({ formType }) => ({
    fullname: '',
    email: '',
    password: '',
    formType: formType === 'signup' ? 'signin' : 'signup',
  }));

  formAction = (login) => {
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
        this.toggleForm();
        return;
      }

      alert('Invalid form');
    }

    const validEmail = email === 'a@a.com';
    const validPassword = password === 'a';
    const signInValid = validEmail && validPassword;

    if (signInValid) {
      const { history } = this.props;
      login();
      history.push('/bookshelf');
    }
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
      <AuthConsumer>
        {({ login }) => (
          <React.Fragment>
            <CloseForm
              type="button"
              onClick={this.returnStartScreen}
            >
              X
            </CloseForm>
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
              <button className="login_button" type="button" onClick={() => this.formAction(login)}>
                {buttonText}
              </button>
            </ButtonContainer>
            <MemberInformation>
              {memberText}
              <button type="button" onClick={this.toggleForm}>
                {actionText}
              </button>
            </MemberInformation>
          </React.Fragment>
        )}
      </AuthConsumer>
    );
  }
}

export default LoginFormContainer;
