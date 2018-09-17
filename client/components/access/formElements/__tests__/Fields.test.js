import React from 'react';
import { mount } from 'enzyme';

import Fields from '../Fields';

describe('Access Form Elements', () => {
  it('Renders Fields for SignUp', () => {
    const props = {
      isSignUpForm: true,
      updateFullname: jest.fn(),
      updateEmail: jest.fn(),
      updatePassword: jest.fn(),
    };

    const wrapper = mount(<Fields {...props} />);

    const fields = wrapper.find('label');
    const inputs = wrapper.find('input');

    expect(fields.at(0).props().htmlFor).toEqual('fullname');
    expect(fields.at(1).props().htmlFor).toEqual('email');
    expect(fields.at(2).props().htmlFor).toEqual('password');

    expect(inputs.at(0).props().id).toEqual('fullname');
    expect(inputs.at(1).props().id).toEqual('email');
    expect(inputs.at(2).props().id).toEqual('password');
  });

  it('Renders Fields for SignIn', () => {
    const props = {
      isSignUpForm: false,
      updateFullname: jest.fn(),
      updateEmail: jest.fn(),
      updatePassword: jest.fn(),
    };

    const wrapper = mount(<Fields {...props} />);

    const fields = wrapper.find('label');
    const inputs = wrapper.find('input');

    expect(fields.at(0).props().htmlFor).toEqual('email');
    expect(fields.at(1).props().htmlFor).toEqual('password');

    expect(inputs.at(0).props().id).toEqual('email');
    expect(inputs.at(1).props().id).toEqual('password');
    wrapper.unmount();
  });
});
