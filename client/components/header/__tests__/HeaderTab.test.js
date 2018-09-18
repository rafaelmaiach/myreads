import React from 'react';
import { mount } from 'enzyme';

import HeaderTab from '../HeaderTab';

describe('Header', () => {
  it('Renders Header Tab', () => {
    const props = {
      active: true,
      text: 'text',
      onClick: jest.fn(),
    };

    const wrapper = mount(<HeaderTab {...props} />);
    const div = wrapper.find('div');
    const button = wrapper.find('button');

    expect(div).toHaveLength(1);

    expect(button).toHaveLength(1);
    expect(button.text()).toEqual(props.text);

    button.simulate('click');

    expect(props.onClick).toHaveBeenCalled();

    wrapper.unmount();
  });
});
