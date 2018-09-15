// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';

import FormFieldHOC from 'Components/access/formFields/FormFieldHOC';

type Props = {
  updateEmail: Function,
  updatePassword: Function,
}

/**
 * @constructor LoginFormSignIn
 * @param {function} updateEmail - Update function for email field
 * @param {function} updatePassword - Update function for password field
 * @description Renders the signin form
 */
const LoginFormSignIn = ({ updateEmail, updatePassword }: Props) => (
  <React.Fragment>
    <FormFieldHOC
      fieldId="email"
      label="E-mail"
      placeholder="e-mail@example.com"
      onStateChanged={updateEmail}
    />

    <FormFieldHOC
      fieldId="password"
      label="Password"
      onStateChanged={updatePassword}
    />
  </React.Fragment>
);

export default shouldUpdate(() => false)(LoginFormSignIn);
