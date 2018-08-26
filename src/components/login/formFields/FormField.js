// @flow
import * as React from 'react';

type Type = 'text' | 'password'

type Props = {
  type: Type,
  label: string,
  fieldId: string,
  placeholder: string,
  required: boolean,
  validator?: Function,
  onStateChanged: Function,
}

export type State = {
  value: string,
  dirty: boolean,
  error: string,
}

class FormField extends React.Component<Props, State> {
  static defaultProps = {
    validator: null,
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
      } catch (err) {
        error = err.message;
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
        <div className="">
          <div className="">
            <input
              type={type}
              className={controlClass}
              id={fieldId}
              placeholder={placeholder}
              value={value}
              onChange={this.hasChanged}
            />

            <label htmlFor={fieldId} className="">
              {label}
            </label>

            {error && (
              <div className="">
                {error}
              </div>)
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormField;
