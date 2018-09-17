import React from 'react';
import { mount } from 'enzyme';

import FormFieldHOC from '../../formFields/FormFieldHOC';
import SignIn from '../SignIn';

describe('Access Form Elements', () => {
  it('Renders Fields for SignIn', () => {
    const props = {
      updateEmail: jest.fn(),
      updatePassword: jest.fn(),
    };

    const wrapper = mount(<SignIn {...props} />);

    expect(wrapper.find(FormFieldHOC)).toHaveLength(2);
    wrapper.unmount();
  });
});
