import React from 'react';
import { mount } from 'enzyme';

import Image from '../Image';

describe('Book Elements', () => {
  it('renders IMAGE if thumbnail exists', () => {
    const thumbnail = 'thumbnail';
    const wrapper = mount(<Image thumbnail={thumbnail} />);

    const wrapperProps = wrapper.find('div').at(1).props();
    expect(wrapperProps.className).toMatch('Image__ImageThumbnail');
    wrapper.unmount();
  });

  it('renders IMAGE NOT FOUND if thumbnail doesn\'t exists', () => {
    const thumbnail = null;
    const wrapper = mount(<Image thumbnail={thumbnail} />);

    const wrapperProps = wrapper.find('div').at(1).props();
    expect(wrapperProps.className).toMatch('Image__ImageNotFound');
    wrapper.unmount();
  });
});
