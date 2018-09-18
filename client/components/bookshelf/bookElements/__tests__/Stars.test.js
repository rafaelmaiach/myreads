import React from 'react';
import { mount } from 'enzyme';

import Stars from '../Stars';

describe('Book Elements', () => {
  it('renders STARS if rating is passed', () => {
    const rating = 3;
    const wrapper = mount(<Stars rating={rating} />);

    expect(wrapper.find('span')).toHaveLength(5);
    wrapper.unmount();
  });

  it('renders RATING not found if rating not passed', () => {
    const rating = null;
    const wrapper = mount(<Stars rating={rating} />);

    expect(wrapper.find('span').text()).toEqual('Rating not found');
    wrapper.unmount();
  });
});
