/* eslint no-underscore-dangle:0 */
import React from 'react';
import { mount } from 'enzyme';

import AuthorQuotes from '../AuthorQuotes';

describe('Access Page', () => {
  it('Renders Author Quotes', () => {
    const wrapper = mount(<AuthorQuotes />);

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
    wrapper.unmount();
  });
});
