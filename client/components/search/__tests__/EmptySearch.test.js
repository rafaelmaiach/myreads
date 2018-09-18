import React from 'react';
import { mount } from 'enzyme';

import EmptySearch from '../EmptySearch';

describe('Search', () => {
  it('Renders Empty Search with no books were found', () => {
    const dirty = true;
    const wrapper = mount(<EmptySearch dirty={dirty} />);
    const span = wrapper.find('span');

    expect(span).toHaveLength(2);
    expect(span.at(0).text()).toEqual('No books were found');
    expect(wrapper.find('p')).toHaveLength(1);

    wrapper.unmount();
  });

  it('Renders Empty Search without no books message', () => {
    const dirty = false;
    const wrapper = mount(<EmptySearch dirty={dirty} />);
    const span = wrapper.find('span');

    expect(span).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);

    wrapper.unmount();
  });
});
