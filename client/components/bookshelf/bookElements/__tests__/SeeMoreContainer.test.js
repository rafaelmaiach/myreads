import React from 'react';
import { mount } from 'enzyme';

import SeeMoreContainer from '../SeeMoreContainer';

describe('Book Elements', () => {
  it('renders SEE MORE CONTAINER', () => {
    const mockFn = jest.fn(() => { });
    const wrapper = mount(<SeeMoreContainer openModal={mockFn} />);

    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.props().onClick).toBeTruthy();
    wrapper.unmount();
  });
});
