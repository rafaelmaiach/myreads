import React from 'react';
import { mount } from 'enzyme';

import Close from '../Close';

describe('Common components', () => {
  it('renders CLOSE button', () => {
    const closeAction = jest.fn();
    const wrapper = mount(<Close closeAction={closeAction} />);

    const button = wrapper.find('button');
    expect(button).toHaveLength(1);

    button.simulate('click');
    expect(closeAction).toHaveBeenCalled();
    wrapper.unmount();
  });
});
