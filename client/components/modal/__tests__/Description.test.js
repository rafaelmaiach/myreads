import React from 'react';
import { mount } from 'enzyme';

import Description from '../Description';

describe('Modal', () => {
  it('Renders Description with passed text', () => {
    const description = 'description';
    const wrapper = mount(<Description description={description} />);

    expect(wrapper.find('p').text()).toEqual(description);

    wrapper.unmount();
  });

  it('Renders Description not found if text not passed', () => {
    const wrapper = mount(<Description />);

    expect(wrapper.find('p').text()).toEqual('Description not found');

    wrapper.unmount();
  });
});
