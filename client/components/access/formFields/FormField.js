// @flow
import * as React from 'react';
import styled from 'styled-components';

import DebounceInput from 'Components/common/DebounceInput';

type Type = 'text' | 'password'

type Props = {
  type: Type,
  label: string,
  fieldId: string,
  placeholder: string,
  required: boolean,
  validator?: ?Function,
  onStateChanged: Function,
}

export type State = {
  value: string,
  dirty: boolean,
  error: string,
}

/**
 * @class FormField
 * @description Represents each form field on sign in and sign up screen
 */
class FormField extends React.PureComponent<Props, State> {
  static defaultProps = {
    validator: null,
  }

  state = {
    value: '',
    dirty: false, // occurs when user changes the value
    error: '',
  }

  /**
  * @method FormField#hasChanged
  * @param {string} value - Input value
  * @description Validate the form field and save the value if valid
  */
  hasChanged = (value:string) => {
    const { dirty } = this.state;
    const {
      label,
      required = false,
      validator,
      onStateChanged,
    } = this.props;

    const isEmpty = value.length === 0;
    const requiredMissing = dirty && required && isEmpty;

    let error = '';

    if (requiredMissing) {
      error = `${label} is required`;
    } else if (validator) {
      try {
        // Runs the YUP validator. As yup throws an error, I'm using try catch
        validator(value);
      } catch (ValidationError) {
        error = ValidationError.message;
      }
    }

    this.setState(() => ({ value, error, dirty: true }), () => onStateChanged(this.state));
  }

  render() {
    const { error } = this.state;
    const {
      type,
      label,
      fieldId,
      placeholder,
    } = this.props;

    return (
      <React.Fragment>
        <FormFieldInputContainer error={error}>
          <label htmlFor={fieldId} className="">
            {label}
          </label>

          <DebounceInput
            id={fieldId}
            type={type}
            placeholder={placeholder}
            debounceTimeout={300}
            onChange={this.hasChanged}
          />
        </FormFieldInputContainer>
      </React.Fragment>
    );
  }
}

const FormFieldInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  width: 100%;
  height: 100px;

  &::after {
    content: '${props => props.error}';
    font-size: 8px;
    color: red;
    padding-top: 3px;
  }

  & label {
    font-weight: 600;
    color: #05386b;
  }

  & input {
    font-size: 10px;
    border: none;
    border-bottom: 1px solid black;
  }

  @media only screen and (min-width: 375px) {
    font-size: 16px;

    &::after {
      font-size: 12px;
    }

    & input {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;

    & input {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1025px) {
    font-size: 24px;

    & input {
      font-size: 22px;
    }
  }
`;

export default FormField;
