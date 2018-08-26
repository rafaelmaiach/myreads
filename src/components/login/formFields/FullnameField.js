// @flow
import * as React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';
import { validateFullname } from 'Utils/login/validateFields';

import FormField from './FormField';

type Props = {
  label: string,
  fieldId: string,
  placeholder: string,
  required: boolean,
  onStateChanged: Function,
}

const FullnameField = (props: Props) => (
  <FormField type="text" validator={validateFullname} {...props} />
);

const shouldComponentUpdate = () => false;

export default shouldUpdate(shouldComponentUpdate)(FullnameField);
