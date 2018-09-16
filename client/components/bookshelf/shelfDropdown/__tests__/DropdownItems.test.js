import React from 'react';
import { mount } from 'enzyme';

import DropdownItems from '../DropdownItems';

describe('Shelf Dropdown', () => {
  it('renders current shelf, the other two shelfs and remove button when book has shelf', () => {
    const props = {
      book: {
        shelf: 'currentlyReading',
      },
      updateBook: jest.fn(),
      removeBook: jest.fn(),
      toggleShelvesList: jest.fn(),
    };

    const shelfName = 'Current shelf:Currently Reading';

    const wrapper = mount(<DropdownItems {...props} />);
    const allButtons = wrapper.find('button');
    const currentShelf = allButtons.at(0); // First button is the current shelf
    const removeShelf = allButtons.at(4);

    expect(allButtons).toHaveLength(5);
    expect(currentShelf.text()).toEqual(shelfName);
    expect(removeShelf.text()).toEqual('Remove');

    wrapper.unmount();
  });

  it('renders current shelf = None, all shelfs as move options and remove when book has not shelf', () => {
    const props = {
      book: {},
      updateBook: jest.fn(),
      removeBook: jest.fn(),
      toggleShelvesList: jest.fn(),
    };

    const shelfName = 'Current shelf:None';

    const wrapper = mount(<DropdownItems {...props} />);
    const allButtons = wrapper.find('button');
    const currentShelf = allButtons.at(0); // First button is the current shelf
    const crShelf = allButtons.at(2);
    const wrShelf = allButtons.at(3);
    const rShelf = allButtons.at(4);

    expect(allButtons).toHaveLength(5);
    expect(crShelf.text()).toEqual('Currently Reading');
    expect(wrShelf.text()).toEqual('Want to Read');
    expect(rShelf.text()).toEqual('Read');
    expect(currentShelf.text()).toEqual(shelfName);

    wrapper.unmount();
  });
});
