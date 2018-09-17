import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import HeaderSearchIcon from '../HeaderSearchIcon';

jest.mock('Assets/icons/search.svg', () => 'src');

describe('Header', () => {
  it('Renders Header Search Icon', () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <Router>
        <HeaderSearchIcon history={history} />
      </Router>
    );
    const image = wrapper.find('img');

    expect(image.props().src).toEqual('src');

    wrapper.unmount();
  });
});
