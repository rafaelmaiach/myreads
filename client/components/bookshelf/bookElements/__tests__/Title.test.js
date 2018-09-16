import React from 'react';
import { mount } from 'enzyme';

import Title from '../Title';

describe('Book Elements', () => {
  it('renders TITLE', () => {
    const title = 'Title';
    const wrapper = mount(<Title titleText={title} />);

    expect(wrapper.find('h1').text()).toEqual(title);
    wrapper.unmount();
  });
});
