import React from 'react';
import { mount } from 'enzyme';

import SignIn from '../SignIn';

describe('Access Form Elements', () => {
  it('Renders Fields for SignIn', () => {
    const props = {
      updateEmail: jest.fn(),
      updatePassword: jest.fn(),
    };

    const wrapper = mount(<SignIn {...props} />);

    const fields = wrapper.find('label');
    const inputs = wrapper.find('input');

    expect(fields.at(0).props().htmlFor).toEqual('email');
    expect(fields.at(1).props().htmlFor).toEqual('password');

    expect(inputs.at(0).props().id).toEqual('email');
    expect(inputs.at(1).props().id).toEqual('password');
    wrapper.unmount();
  });
});
