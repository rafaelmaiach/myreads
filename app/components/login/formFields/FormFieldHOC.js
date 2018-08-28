// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import validateField from 'Utils/login/validateFields';

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

  const validator = validateField(fieldId);
  const type = fieldId === 'password' ? fieldId : 'text';

  return (
    <FormField key={fieldId} type={type} validator={validator} {...props} />
  );
};

const shouldComponentUpdate = () => false;

export default shouldUpdate(shouldComponentUpdate)(FormFieldHOC);
