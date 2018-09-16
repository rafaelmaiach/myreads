import React from 'react';
import { mount } from 'enzyme';

import Subtitle from '../Subtitle';

describe('Book Elements', () => {
  it('renders SUBTITLE', () => {
    const subtitle = 'Subtitle';
    const wrapper = mount(<Subtitle subtitleText={subtitle} />);

    expect(wrapper.find('h3').text()).toEqual(subtitle);
    wrapper.unmount();
  });
});
