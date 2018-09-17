import React from 'react';
import { mount } from 'enzyme';

import DropdownItems from '../DropdownItems';
import Dropdown from '../Dropdown';

describe('Shelf Dropdown', () => {
  it('renders DROPDOWN button', () => {
    const props = {
      book: {},
      updateBook: jest.fn(),
      removeBook: jest.fn(),
      toggleShelvesList: jest.fn(),
    };

    const wrapper = mount(<Dropdown {...props} />);

    const button = wrapper.find('button').at(0);
    const buttonProps = button.props();

    expect(buttonProps.className).toMatch('Dropdown__ShelfDropdownButton');
    expect(wrapper.find(DropdownItems)).toHaveLength(1);

    wrapper.unmount();
  });
});
