import React from 'react';
import { mount } from 'enzyme';

import Description from '../Description';

describe('Book Elements', () => {
  it('renders DESCRIPTION', () => {
    const description = 'Description';
    const wrapper = mount(<Description descriptionReduced={description} />);

    expect(wrapper.find('p').text()).toEqual(description);
    wrapper.unmount();
  });
});
