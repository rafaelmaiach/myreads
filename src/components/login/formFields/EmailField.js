// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import { validateEmail } from 'Utils/login/validateFields';

import FormField from './FormField';

type Props = {
  label: string,
  fieldId: string,
  placeholder: string,
  required: boolean,
  onStateChanged: Function,
}

const EmailField = (props: Props) => (
  <FormField type="text" validator={validateEmail} {...props} />
);

const shouldComponentUpdate = () => false;

export default shouldUpdate(shouldComponentUpdate)(EmailField);
