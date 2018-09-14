// @flow
import * as React from 'react';

import { debounce } from 'Utils/helpers';

type Props = {
  id: string,
  type: string,
  placeholder: string,
  debounceTimeout: number,
  onChange: Function,
}

type State = {
  value: '',
  timeout: number,
}

class DebounceInput extends React.PureComponent<Props, State> {
  handleChange: Function;

  debouncedOnChange: Function;

  constructor(props: Props) {
    super(props);

    const { debounceTimeout } = props;

    this.state = {
      value: '',
      timeout: debounceTimeout,
    };

    const { timeout } = this.state;

    this.debouncedOnChange = debounce((value:string) => {
      const { onChange } = this.props;
      onChange(value);
    }, timeout);

    this.handleChange = (event:Object) => {
      event.persist();
      const { value } = event.target;
      this.setState(() => ({ value }));
      this.debouncedOnChange(value);
    };
  }

  render() {
    const { value } = this.state;
    const {
      id,
      type,
      placeholder,
    } = this.props;

    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default DebounceInput;
