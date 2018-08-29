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
  needToValidate: boolean,
}

const FormFieldHOC = (props: Props) => {
  const { fieldId, needToValidate } = props;

  const validator = needToValidate ? validateField(fieldId) : null;

  const type = fieldId === 'password' ? fieldId : 'text';

  return (
    <FormField key={fieldId} type={type} validator={validator} {...props} />
  );
};

const shouldComponentUpdate = (props, nextProps) => {
  const { needToValidate } = props;
  return needToValidate !== nextProps.needToValidate;
};

export default shouldUpdate(shouldComponentUpdate)(FormFieldHOC);
