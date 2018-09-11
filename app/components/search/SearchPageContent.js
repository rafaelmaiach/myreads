// @flow
import * as React from 'react';

import EmptySearch from 'Components/search/EmptySearch';
import BookshelfList from 'Components/bookshelf/BookshelfList';

type Props = {
  bookListNotEmpty: boolean,
  isLoading: boolean,
  booksList: Array<Object>,
  changeShelfFor: Function,
  dirty: boolean,
  isUpdatingBook: boolean,
}

const SearchScreenContent = (props: Props) => {
  const {
    bookListNotEmpty,
    isLoading,
    booksList,
    changeShelfFor,
    dirty,
    isUpdatingBook,
  } = props;

  if (bookListNotEmpty && isLoading === false) {
    return (
      <BookshelfList
        isLoading={isLoading}
        booksList={booksList}
        changeShelfFor={changeShelfFor}
      />
    );
  }

  return <EmptySearch dirty={dirty} isUpdatingBook={isUpdatingBook} />;
};

export default SearchScreenContent;
