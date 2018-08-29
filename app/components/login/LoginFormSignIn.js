// @flow
import * as React from 'react';

import FormFieldHOC from './formFields/FormFieldHOC';

type Props = {
  updateEmail: Function,
  updatePassword: Function,
}

const LoginFormSignUp = (props: Props) => {
  const { updateEmail, updatePassword } = props;

  return (
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
};

export default LoginFormSignUp;
