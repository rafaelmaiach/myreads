import React from 'react';
import { mount } from 'enzyme';

import FormFieldHOC from '../../formFields/FormFieldHOC';
import SignUp from '../SignUp';

describe('Access Form Elements', () => {
  it('Renders Fields for SignUp', () => {
    const props = {
      updateFullname: jest.fn(),
      updateEmail: jest.fn(),
      updatePassword: jest.fn(),
    };

    const wrapper = mount(<SignUp {...props} />);

    expect(wrapper.find(FormFieldHOC)).toHaveLength(3);
    wrapper.unmount();
  });
});
