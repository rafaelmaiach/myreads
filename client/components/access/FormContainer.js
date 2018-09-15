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

/**
 * @class FormContainer
 * @description Represents the access form component. It's used as a wrapper for signin and singup forms
 */
class FormContainer extends React.PureComponent<Props, State> {
  state = {
    fullname: '',
    email: '',
    password: '',
    formType: 'signin', // signin / signup. Chose the form to be rendered
    invalidFormType: '', // userExists, invalidUser, invalidForm
  };

  /**
   * @method FormContainer#returnStartScreen
   * @description Used when the user clicks on the X button. Send back to main screen
   */
  returnStartScreen = () => {
    const { history } = this.props;
    history.push('/main');
  }

  /**
   * @method FormContainer#updateStateFieldFor
   * @param {string} field - Represents a state property
   * @description Creates a closure to create different function for each state field (fullname, email, password)
   * @returns Returns a function to update the passed state property with the value or empty string if the value is invalid
   */
  updateStateFieldFor = (field: string) => (state: FormFieldState) => {
    const { value, error } = state;
    this.setState(() => ({ [field]: !error ? value : '' }));
  };

  /**
   * @method FormContainer#toggleForm
   * @description Change the form between signin and signup
   */
  toggleForm = () => this.setState(({ formType }) => ({
    fullname: '',
    email: '',
    password: '',
    invalidFormType: '',
    formType: formType === 'signup' ? 'signin' : 'signup',
  }));

  /**
   * @method FormContainer#formAction
   * @param {function} login - Login function stored on ContextAPI
   * @description Check if the validation function will be for signin or signup form
   */
  formAction = (login: Function) => {
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

  /**
   * @method FormContainer#signUp
   * @description Validate the signup form and creates user if valid
   */
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

      // Creates the new user object
      const newUser = {
        fullname,
        email,
        password,
        token: Math.random().toString(36).substr(-8),
      };

      // LocalStorage is being used as our DB.
      // Get the list of registered users
      const usersListString = localStorage.getItem('usersList');

      if (usersListString) {
        // Parse the users list
        usersList = JSON.parse(usersListString);
        // Check if the email is already registered
        userFound = usersList.find(obj => obj.email === email);

        // If userFound, the email is invalid because it was previously registered
        if (userFound) {
          this.setState(() => ({
            invalidFormType: 'userExists',
          }));
          return;
        }
      }

      // If not, just push the new user to the users list on localStorage
      usersList.push(newUser);
      localStorage.setItem('usersList', JSON.stringify(usersList));
      this.toggleForm();
      return;
    }

    this.setState(() => ({
      invalidFormType: 'invalidForm',
    }));
  }

  /**
   * @method FormContainer#signIn
   * @param {function} login - Login function stored on ContextAPI
   * @description Validate the signin form
   */
  signIn = (login: Function) => {
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

    // Check if the user is registered by checking email and password on users list
    if (usersList) {
      userFound = usersList.find(({ email, password }) => (
        (email === loginEmail) && (password === loginPassword)
      ));
    }

    // If user found, the user can login, so send it to bookshelf screen and call contextapi login
    // Login function will store the user as authenticated
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

  // Get the closure for fullname
  updateFullname = this.updateStateFieldFor('fullname');

  // Get the closure for email
  updateEmail = this.updateStateFieldFor('email');

  // Get the closure for password
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

export default withRouter(FormContainer);
