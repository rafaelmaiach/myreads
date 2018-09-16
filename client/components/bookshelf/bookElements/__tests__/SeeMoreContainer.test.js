import React from 'react';
import { mount } from 'enzyme';

import SeeMoreContainer from '../SeeMoreContainer';

describe('Book Elements', () => {
  it('renders SEE MORE CONTAINER', () => {
    const clickFn = jest.fn(() => { });
    const wrapper = mount(<SeeMoreContainer openModal={clickFn} />);

    const button = wrapper.find('button');

    expect(button).toHaveLength(1);

    button.simulate('click');

    expect(clickFn).toHaveBeenCalled();

    wrapper.unmount();
  });
});
