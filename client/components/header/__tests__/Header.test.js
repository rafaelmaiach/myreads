import React from 'react';
import { mount } from 'enzyme';

import Header from '../Header';

describe('Header', () => {
  it('Renders Header container', () => {
    const wrapper = mount(
      <Header>
        <div>Children</div>
      </Header>
    );

    expect(wrapper.children).toBeTruthy();
    wrapper.unmount();
  });
});
