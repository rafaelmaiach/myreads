// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import { validateEmail, validateFullname } from 'Utils/login/validateFields';

import FormField from './FormField';

type Props = {
  label: string,
  fieldId: string,
  placeholder: string,
  required: boolean,
  onStateChanged: Function,
}

const FormFieldHOC = (props: Props) => {
  const { fieldId } = props;
  const validators = {
    email: validateEmail,
    fullname: validateFullname,
  };

  const validator = validators[fieldId];

  return (
    <FormField key={fieldId} type="text" validator={validator} {...props} />
  );
};

const shouldComponentUpdate = () => false;

export default shouldUpdate(shouldComponentUpdate)(FormFieldHOC);
