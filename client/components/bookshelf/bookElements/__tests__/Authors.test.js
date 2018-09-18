import React from 'react';
import { mount } from 'enzyme';

import Authors from '../Authors';

describe('Book Elements', () => {
  it('renders AUTHORS', () => {
    const name = 'Author';
    const wrapper = mount(<Authors authorsNames={name} />);

    expect(wrapper.find('h4').text()).toEqual(name);
    wrapper.unmount();
  });
});
