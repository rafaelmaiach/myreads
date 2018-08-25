import React from 'react';
import { Formik } from 'formik';

import LoginFormSignUp from './LoginFormSignUp';
import validateForm from '../../utils/login/validateForm';

const LoginFormContainer = () => {
  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('User has been sucessfully saved!', values);
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={onSubmit}
      render={props => <LoginFormSignUp {...props} />}
    />
  );
};

export default LoginFormContainer;
