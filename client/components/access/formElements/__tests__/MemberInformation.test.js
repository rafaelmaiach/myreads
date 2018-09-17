import React from 'react';
import { mount } from 'enzyme';

import MemberInformation from '../MemberInformation';

describe('Access Form Elements', () => {
  it('Renders Member Information based on props', () => {
    const props = {
      text: 'Text',
      actionText: 'Action text',
      toggleForm: jest.fn(),
    };

    const wrapper = mount(<MemberInformation {...props} />);

    const div = wrapper.find('div');
    const button = wrapper.find('button');

    expect(div.text()).toMatch(props.text);
    expect(button.text()).toEqual(props.actionText);

    button.simulate('click');
    expect(props.toggleForm).toHaveBeenCalled();
    wrapper.unmount();
  });
});
