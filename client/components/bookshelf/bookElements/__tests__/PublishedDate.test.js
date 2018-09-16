import React from 'react';
import { mount } from 'enzyme';

import PublishedDate from '../PublishedDate';

describe('Book Elements', () => {
  it('renders PUBLISHED DATE if date is passed', () => {
    const date = '2018-01-01';
    const wrapper = mount(<PublishedDate date={date} />);

    expect(wrapper.find('span').text()).toEqual(`Published date: ${date}`);
    wrapper.unmount();
  });

  it('renders PUBLISHED DATE not found if date is not passed', () => {
    const date = null;
    const wrapper = mount(<PublishedDate date={date} />);

    expect(wrapper.find('span').text()).toEqual('Published date not found');
    wrapper.unmount();
  });
});
