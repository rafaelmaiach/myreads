import React from 'react';
import { mount } from 'enzyme';

import Button from '../Button';

describe('Access Form Elements', () => {
  it('Renders Button', () => {
    const props = {
      text: 'Button',
      formAction: jest.fn(),
    };

    const wrapper = mount(<Button {...props} />);

    const button = wrapper.find('button');

    expect(button).toHaveLength(1);
    expect(button.text()).toEqual(props.text);

    expect(typeof button.props().onClick).toEqual(typeof jest.fn());

    button.simulate('click');
    expect(props.formAction).toHaveBeenCalled();
    wrapper.unmount();
  });
});
