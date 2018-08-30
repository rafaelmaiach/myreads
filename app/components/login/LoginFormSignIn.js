// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';

import FormFieldHOC from './formFields/FormFieldHOC';

type Props = {
  updateEmail: Function,
  updatePassword: Function,
}

const LoginFormSignIn = ({ updateEmail, updatePassword }: Props) => (
  <React.Fragment>
    <FormFieldHOC
      fieldId="email"
      label="Email"
      placeholder="email@example.com"
      onStateChanged={updateEmail}
    />

    <FormFieldHOC
      fieldId="password"
      label="Password"
      onStateChanged={updatePassword}
    />
  </React.Fragment>
);

const shouldComponentUpdate = () => false;

export default shouldUpdate(shouldComponentUpdate)(LoginFormSignIn);
