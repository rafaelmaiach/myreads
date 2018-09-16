import React from 'react';
import { mount } from 'enzyme';

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

    const dropdownItems = wrapper.find('div').at(1).props();

    expect(buttonProps.className).toMatch('Dropdown__ShelfDropdownButton');
    expect(dropdownItems.className).toMatch('ShelfDropdownItems');

    wrapper.unmount();
  });
});
