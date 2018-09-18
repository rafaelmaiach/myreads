import React from 'react';
import { mount } from 'enzyme';

import Publisher from '../Publisher';

describe('Book Elements', () => {
  it('renders PUBLISHER if publisher is passed', () => {
    const publisher = 'publisher';
    const wrapper = mount(<Publisher publisher={publisher} />);

    expect(wrapper.find('span').text()).toEqual(`Publisher: ${publisher}`);
    wrapper.unmount();
  });

  it('renders PUBLISHER not found if publisher is not passed', () => {
    const publisher = null;
    const wrapper = mount(<Publisher publisher={publisher} />);

    expect(wrapper.find('span').text()).toEqual('Publisher not found');
    wrapper.unmount();
  });
});
