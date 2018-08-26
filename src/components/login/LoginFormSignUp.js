// @flow
import * as React from 'react';

import FormFieldHOC from './formFields/FormFieldHOC';
import PasswordField from './formFields/PasswordField';

type State = {
  fullname: string,
  email: string,
  password: string,
}

type FormFieldState = {
  value: string,
  dirty: boolean, // occurs when user changes the value
  error: string,
}

class LoginFormSignUp extends React.PureComponent<void, State> {
  state = {
    fullname: '',
    email: '',
    password: '',
  };

  // Using closure to create different function for each field
  updateStateFieldFor = (field: string) => (state: FormFieldState) => {
    const { value, error } = state;
    this.setState(() => ({ [field]: !error ? value : '' }));
  };

  updateFullname = this.updateStateFieldFor('fullname');

  updateEmail = this.updateStateFieldFor('email');

  updatePassword = this.updateStateFieldFor('password');

  render() {
    const { fullname, email, password } = this.state;
    const isFormValid = fullname && email && password;

    console.log(this.state);

    return (
      <div className="">
        <form>
          <div className="">
            <FormFieldHOC
              fieldId="fullname"
              label="Fullname"
              placeholder="Enter Fullname"
              onStateChanged={this.updateFullname}
              required
            />

            <FormFieldHOC
              fieldId="email"
              label="Email"
              placeholder="Enter Email Address"
              onStateChanged={this.updateEmail}
              required
            />

            <PasswordField
              fieldId="password"
              label="Password"
              placeholder="Enter Password"
              onStateChanged={this.updatePassword}
              minLength={7} // Minimal length for passwords
              minStrength={3} // Minimal strength to be valid (determined by zxcvbn)
              required
            />
          </div>
          <div className="">
            {isFormValid && (
              <button type="button" className="">
                Join
              </button>)
            }
          </div>
        </form>
      </div>
    );
  }
}

export default LoginFormSignUp;
