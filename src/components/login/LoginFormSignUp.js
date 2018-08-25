// @flow
import * as React from 'react';
import onlyUpdateForValues from '../../utils/login/onlyUpdateForValues';
import './SignUpForm.css';

type Props = {
  isSubmitting: boolean,
  errors: {
    email?: '',
    password?: '',
    passwordConfirmation?: '',
  },
  handleChange: Function,
  handleSubmit: Function,
};

const LoginFormSignUp = (props: Props) => {
  const {
    isSubmitting,
    errors,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <div className="form">
      <label className="form-field" htmlFor="email">
        <span>E-mail:</span>
        <input name="email" type="email" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.email}</div>

      <label className="form-field" htmlFor="password">
        <span>Password:</span>
        <input name="password" type="password" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.password}</div>

      <label className="form-field" htmlFor="passwordConfirmation">
        <span>Confirm password:</span>
        <input name="passwordConfirmation" type="password" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.passwordConfirmation}</div>

      <button
        type="submit"
        onClick={handleSubmit}
      >
        {isSubmitting ? 'Loading' : 'Sign Up'}
      </button>
    </div>
  );
};

const PureLoginFormSignUp = onlyUpdateForValues(LoginFormSignUp);

export default PureLoginFormSignUp;
