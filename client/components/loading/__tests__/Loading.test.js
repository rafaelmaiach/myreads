import React from 'react';
import { mount } from 'enzyme';

import Loading from '../Loading';

describe('Loading', () => {
  it('Renders Loading', () => {
    const wrapper = mount(<Loading />);

    expect(wrapper.find('div')).toHaveLength(5);
    expect(wrapper.find('p')).toHaveLength(9);

    wrapper.unmount();
  });
});
