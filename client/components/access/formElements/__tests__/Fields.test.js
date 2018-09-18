import React from 'react';
import { mount } from 'enzyme';

import SignUp from '../SignUp';
import SignIn from '../SignIn';
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

    expect(wrapper.find(SignUp)).toHaveLength(1);
    wrapper.unmount();
  });

  it('Renders Fields for SignIn', () => {
    const props = {
      isSignUpForm: false,
      updateFullname: jest.fn(),
      updateEmail: jest.fn(),
      updatePassword: jest.fn(),
    };

    const wrapper = mount(<Fields {...props} />);

    expect(wrapper.find(SignIn)).toHaveLength(1);
    wrapper.unmount();
  });
});
