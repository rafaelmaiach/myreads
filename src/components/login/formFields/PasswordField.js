// @flow
import * as React from 'react';
import zxcvbn from 'zxcvbn';
import { validatePasswordStrong } from 'Utils/login/validateFields';

import FormField from './FormField';

type Props = {
  label: string,
  fieldId: string,
  placeholder: string,
  onStateChanged: Function,
  minStrength: number,
  minLength: number,
  required: boolean,
}

type State = {
  password: string,
  strength: number,
}

type FormFieldState = {
  value: string,
  dirty: boolean, // occurs when user changes the value
  error: string,
}

class PasswordField extends React.Component<Props, State> {
  minStrength: number;

  minLength: number;

  constructor(props: Props) {
    super(props);

    this.state = {
      // Password is used on onStateChanged
      password: '', //eslint-disable-line
      strength: 0,
    };

    const { minStrength = 3, minLength = 6 } = props;

    this.minStrength = minStrength;
    this.minLength = minLength;
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { strength } = this.state;
    const { strength: nextStrength } = nextState;

    if (strength !== nextStrength || strength >= 3) return true;
    return false;
  }

  updatePasswordState = (state: FormFieldState) => {
    const { onStateChanged } = this.props;
    const { value, error } = state;

    this.setState(() => (
      {
        password: value,
        strength: zxcvbn(value).score,
      }
    ), () => {
      if (!error) onStateChanged(state);
    });
  };

  render() {
    const {
      onStateChanged, // Remove onStateChanged to don't override FormField method
      ...restProps
    } = this.props;

    const { strength } = this.state;

    return (
      <React.Fragment>
        <div className="">
          <FormField
            key="password"
            type="password"
            validator={validatePasswordStrong}
            onStateChanged={this.updatePasswordState}
            {...restProps}
          />
          <meter className={`password-meter meter-strength-${strength}`} />
        </div>
      </React.Fragment>
    );
  }
}

export default PasswordField;
