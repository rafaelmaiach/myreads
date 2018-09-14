// @flow
import * as React from 'react';
import withRouter from 'react-router-dom/withRouter';

import { AuthConsumer } from 'Components/control/AuthContext';

import Close from 'Components/common/Close';
import Fields from './formElements/Fields';
import Button from './formElements/Button';
import MemberInformation from './formElements/MemberInformation';
import InvalidFormMessage from './formElements/InvalidFormMessage';

type Props = {
  history: Function,
}

type State = {
  fullname: string,
  email: string,
  password: string,
  formType: string,
  invalidFormType: string,
}

type FormFieldState = {
  value: string,
  dirty: boolean, // occurs when user changes the value
  error: string,
}

class LoginFormContainer extends React.PureComponent<Props, State> {
  state = {
    fullname: '',
    email: '',
    password: '',
    formType: 'signin',
    invalidFormType: '', // userExists, invalidUser, invalidForm
  };

  returnStartScreen = () => {
    const { history } = this.props;
    history.push('/main');
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
    invalidFormType: '',
    formType: formType === 'signup' ? 'signin' : 'signup',
  }));

  formAction = (login) => {
    const {
      formType,
    } = this.state;

    const isSignUp = formType === 'signup';

    if (isSignUp) {
      this.signUp();
      return;
    }

    this.signIn(login);
  }

  signUp = () => {
    const {
      fullname,
      email,
      password,
    } = this.state;

    const formIsValid = fullname && email && password;

    if (formIsValid) {
      let usersList = [];
      let userFound = null;
      const newUser = {
        fullname,
        email,
        password,
        token: Math.random().toString(36).substr(-8),
      };

      const usersListString = localStorage.getItem('usersList');

      if (usersListString) {
        usersList = JSON.parse(usersListString);
        userFound = usersList.find(obj => obj.email === email);

        if (userFound) {
          this.setState(() => ({
            invalidFormType: 'userExists',
          }));
          return;
        }
      }

      usersList.push(newUser);
      localStorage.setItem('usersList', JSON.stringify(usersList));
      this.toggleForm();
      return;
    }

    this.setState(() => ({
      invalidFormType: 'invalidForm',
    }));
  }

  signIn = (login) => {
    const {
      email: loginEmail,
      password: loginPassword,
    } = this.state;

    let usersList = null;
    let userFound = null;

    const usersListString = localStorage.getItem('usersList');

    if (usersListString) {
      usersList = JSON.parse(usersListString);
    }

    if (usersList) {
      userFound = usersList.find(({ email, password }) => (
        (email === loginEmail) && (password === loginPassword)
      ));
    }

    if (userFound) {
      const { history } = this.props;
      login(userFound);
      history.push('/');
      return;
    }

    this.setState(() => ({
      invalidFormType: 'invalidUser',
    }));
  }

  updateFullname = this.updateStateFieldFor('fullname');

  updateEmail = this.updateStateFieldFor('email');

  updatePassword = this.updateStateFieldFor('password');

  render() {
    const {
      formType,
      invalidFormType,
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
            <InvalidFormMessage type={invalidFormType} />
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

export default withRouter(LoginFormContainer);
