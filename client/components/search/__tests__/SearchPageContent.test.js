import React from 'react';
import { shallow } from 'enzyme';

import EmptySearch from 'Components/search/EmptySearch';
import BookshelfList from 'Components/bookshelf/BookshelfList';
import SearchPageContent from '../SearchPageContent';

describe('Search', () => {
  it('Renders Search Page Content with Empty Search if bookListNotEmpty is false', () => {
    const wrapper = shallow(<SearchPageContent />);

    expect(wrapper.find(EmptySearch)).toHaveLength(1);

    wrapper.unmount();
  });

  it('Renders Search Page Content with Bookshelf List if bookListNotEmpty is true', () => {
    const bookListNotEmpty = [];
    const wrapper = shallow(<SearchPageContent bookListNotEmpty={bookListNotEmpty} />);

    expect(wrapper.find(BookshelfList)).toHaveLength(1);

    wrapper.unmount();
  });
});
