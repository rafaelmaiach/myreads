// @flow
import * as React from 'react';

import EmptySearch from 'Components/search/EmptySearch';
import BookshelfList from 'Components/bookshelf/BookshelfList';

type Props = {
  bookListNotEmpty: boolean,
  dirty: boolean,
  isLoading: boolean,
  booksList: Array<Object>,
  changeShelfFor: Function,
}

const SearchPageContent = (props: Props) => {
  const {
    bookListNotEmpty,
    isLoading,
    booksList,
    changeShelfFor,
    dirty,
  } = props;

  return (
    bookListNotEmpty
      ? (
        <BookshelfList
          bookListNotEmpty={bookListNotEmpty}
          isLoading={isLoading}
          booksList={booksList}
          changeShelfFor={changeShelfFor}
          isSearchPage
        />)
      : <EmptySearch dirty={dirty} />
  );
};

export default SearchPageContent;
