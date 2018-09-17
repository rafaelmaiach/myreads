import React from 'react';
import { mount } from 'enzyme';

import Loading from 'Components/loading/Loading';
import BookshelfBook from '../BookshelfBook';
import BookshelfList from '../BookshelfList';

jest.mock('Assets/icons/search.svg', () => '');

describe('Bookshelf', () => {
  it('Renders Bookshelf List books', () => {
    const props = {
      isLoading: false,
      booksList: [{ id: 1 }],
      changeShelfFor: jest.fn(),
      isSearchPage: false,
    };

    const wrapper = mount(<BookshelfList {...props} />);

    expect(wrapper.find(BookshelfBook)).toHaveLength(1);

    wrapper.unmount();
  });

  it('Renders Loading', () => {
    const props = {
      isLoading: true,
      booksList: [{ id: 1 }],
      changeShelfFor: jest.fn(),
      isSearchPage: false,
    };

    const wrapper = mount(<BookshelfList {...props} />);

    expect(wrapper.find(Loading)).toHaveLength(1);

    wrapper.unmount();
  });
});
