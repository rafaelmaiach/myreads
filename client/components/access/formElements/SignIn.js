// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';

import FormFieldHOC from 'Components/access/formFields/FormFieldHOC';

type Props = {
  updateEmail: Function,
  updatePassword: Function,
}

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
