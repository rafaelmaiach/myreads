import React from 'react';
import { mount } from 'enzyme';

import Preview from '../Preview';

describe('Book Elements', () => {
  it('renders PREVIEW button', () => {
    const link = 'link';
    const wrapper = mount(<Preview link={link} />);

    const wrapperProps = wrapper.find('a').props();
    expect(wrapperProps.href).toMatch(link);
    wrapper.unmount();
  });
});
