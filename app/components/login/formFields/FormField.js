// @flow
import * as React from 'react';
import styled from 'styled-components';

type Type = 'text' | 'password'

type Props = {
  type: Type,
  label: string,
  fieldId: string,
  placeholder?: string,
  required: boolean,
  validator?: ?Function,
  onStateChanged: Function,
}

export type State = {
  value: string,
  dirty: boolean,
  error: string,
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2vw;
  width: 100%;
  height: 100px;

  &::after {
    content: '${props => props.error}';
    font-size: 12px;
    color: red;
    padding-top: 3px;
  }

  & label {
    font-weight: 600;
    color: #05386b;
  }

  & input {
    font-size: 1.5vw;
    border: none;
    border-bottom: 1px solid black;
  }
`;

class FormField extends React.Component<Props, State> {
  static defaultProps = {
    validator: null,
    placeholder: '',
  }

  state = {
    value: '',
    dirty: false, // occurs when user changes the value
    error: '',
  }

  hasChanged = (e: Object) => {
    e.preventDefault();

    const { dirty } = this.state;
    const {
      label,
      required = false,
      validator,
      onStateChanged,
    } = this.props;

    const { value } = e.target;
    const isEmpty = value.length === 0;
    const requiredMissing = dirty && required && isEmpty;

    let error = '';

    if (requiredMissing) {
      error = `${label} is required`;
    } else if (validator) {
      try {
        validator(value);
      } catch (ValidationError) {
        error = ValidationError.message;
      }
    }

    this.setState(() => ({ value, error, dirty: true }), () => onStateChanged(this.state));
  }

  render() {
    const { value, dirty, error } = this.state;
    const {
      type,
      label,
      fieldId,
      placeholder,
    } = this.props;

    const errorClass = error ? 'field-invalid' : 'field-valid';
    const controlClass = dirty ? errorClass : '';

    return (
      <React.Fragment>
        <InputContainer error={error}>
          <label htmlFor={fieldId} className="">
            {label}
          </label>

          <input
            type={type}
            className={controlClass}
            id={fieldId}
            placeholder={placeholder}
            value={value}
            onChange={this.hasChanged}
          />
        </InputContainer>
      </React.Fragment>
    );
  }
}

export default FormField;
