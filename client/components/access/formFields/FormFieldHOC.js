// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import validateField from 'Utils/access/validateFields';

import FormField from './FormField';

type Props = {
  label: string,
  fieldId: string,
  placeholder: string,
  required: boolean,
  onStateChanged: Function,
  needToValidate: boolean,
}

/**
 * @constructor FormFieldHOC
 * @param {object} props - Props for form field
 * @description HOC to set the validator function and the type of input for each form field
 */
const FormFieldHOC = (props: Props) => {
  const { fieldId, needToValidate } = props;

  // If needs to validate, gets the corresponding YUP schema
  const validator = needToValidate ? validateField(fieldId) : null;

  const type = fieldId === 'password' ? fieldId : 'text';

  return (
    <FormField key={fieldId} type={type} validator={validator} {...props} />
  );
};

/* instanbul ignore next */
const shouldComponentUpdate = (props, nextProps) => {
  const { needToValidate } = props;
  return needToValidate !== nextProps.needToValidate;
};

export default shouldUpdate(shouldComponentUpdate)(FormFieldHOC);
