// @flow
import * as React from 'react';

import { AuthConsumer } from 'Components/control/AuthContext';

import Close from 'Components/common/Close';
import Fields from './formElements/Fields';
import Button from './formElements/Button';
import MemberInformation from './formElements/MemberInformation';

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

class LoginFormContainer extends React.PureComponent<void, State> {
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
        this.toggleForm();
        return;
      }

      console.log('Invalid form');
      return;
    }

    const validEmail = email === '';
    const validPassword = password === '';
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
            <Close closeAction={this.returnStartScreen} />
            <Fields
              isSignUpForm={isSignUpForm}
              updateFullname={this.updateFullname}
              updateEmail={this.updateEmail}
              updatePassword={this.updatePassword}
            />
            <Button text={buttonText} formAction={() => this.formAction(login)} />
            <MemberInformation
              text={memberText}
              actionText={actionText}
              toggleForm={this.toggleForm}
            />
          </React.Fragment>
        )}
      </AuthConsumer>
    );
  }
}

export default LoginFormContainer;
