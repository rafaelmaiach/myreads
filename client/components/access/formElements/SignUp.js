// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';

import FormFieldHOC from 'Components/access/formFields/FormFieldHOC';

type Props = {
  updateFullname: Function,
  updateEmail: Function,
  updatePassword: Function,
}

/**
 * @constructor LoginFormSignUp
 * @param {function} updateFullname - Update function for fullname field
 * @param {function} updateEmail - Update function for email field
 * @param {function} updatePassword - Update function for password field
 * @description Renders the signup form
 */
const LoginFormSignUp = ({ updateFullname, updateEmail, updatePassword }: Props) => (
  <React.Fragment>
    <FormFieldHOC
      fieldId="fullname"
      label="Fullname"
      placeholder="John Doe"
      onStateChanged={updateFullname}
      required
      needToValidate
    />

    <FormFieldHOC
      fieldId="email"
      label="E-mail"
      placeholder="e-mail@example.com"
      onStateChanged={updateEmail}
      required
      needToValidate
    />

    <FormFieldHOC
      fieldId="password"
      label="Password"
      onStateChanged={updatePassword}
      required
      needToValidate
    />
  </React.Fragment>
);

export default shouldUpdate(() => false)(LoginFormSignUp);
