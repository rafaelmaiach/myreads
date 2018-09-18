import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import BackButton from '../BackButton';

describe('Search', () => {
  it('Renders BackButton', () => {
    const wrapper = mount(
      <Router>
        <BackButton />
      </Router>
    );

    expect(wrapper.find('button')).toHaveLength(1);

    wrapper.unmount();
  });
});
