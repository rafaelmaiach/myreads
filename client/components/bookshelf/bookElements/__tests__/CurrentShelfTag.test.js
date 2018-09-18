import React from 'react';
import { mount } from 'enzyme';

import CurrentShelfTag from '../CurrentShelfTag';

describe('Book Elements', () => {
  it('renders CURRENT SHELF TAG if shelf is passed', () => {
    const shelfs = [
      {
        id: 'currentlyReading',
        text: 'Currently Reading',
      },
      {
        id: 'wantToRead',
        text: 'Want to Read',
      },
      {
        id: 'read',
        text: 'Read',
      },
      {
        id: 'none',
        text: 'None',
      },
    ];

    shelfs.forEach((shelf) => {
      const wrapper = mount(<CurrentShelfTag shelf={shelf.id} />);

      expect(wrapper.find('span').text()).toEqual(shelf.text);

      wrapper.unmount();
    });
  });

  it('not renders CURRENT SHELF TAG if shelf is not passed', () => {
    const shelf = null;

    const wrapper = mount(<CurrentShelfTag shelf={shelf} />);

    expect(wrapper.find('span')).toHaveLength(0);
  });
});
