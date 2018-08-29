// @flow
import * as React from 'react';

import FormFieldHOC from './formFields/FormFieldHOC';

type Props = {
  updateFullname: Function,
  updateEmail: Function,
  updatePassword: Function,
}

const LoginFormSignUp = (props: Props) => {
  const { updateFullname, updateEmail, updatePassword } = props;

  return (
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
        label="Email"
        placeholder="email@example.com"
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
};

export default LoginFormSignUp;
