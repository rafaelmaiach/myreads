import React from 'react';
import { mount } from 'enzyme';

import HeaderTab from '../HeaderTab';

describe('Header', () => {
  it('Renders Header Tab', () => {
    const props = {
      active: true,
      text: 'text',
    };

    const wrapper = mount(<HeaderTab {...props} />);
    const div = wrapper.find('div');
    const button = wrapper.find('a');

    expect(div).toHaveLength(1);

    expect(button).toHaveLength(1);
    expect(button.text()).toEqual(props.text);

    wrapper.unmount();
  });
});
