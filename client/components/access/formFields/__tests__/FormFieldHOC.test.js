import React from 'react';
import { mount } from 'enzyme';

import FormField from '../FormField';
import FormFieldHOC from '../FormFieldHOC';

describe('Access formFields', () => {
  it('Renders Form Field HOC', () => {
    const props = {
      label: '',
      fieldId: '',
      placeholder: '',
      required: true,
      onStateChanged: jest.fn(),
      needToValidate: true,
    };

    const wrapper = mount(<FormFieldHOC {...props} />);

    expect(wrapper.find(FormField)).toHaveLength(1);
    wrapper.unmount();
  });
});
