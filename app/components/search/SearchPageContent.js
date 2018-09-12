// @flow
import * as React from 'react';

import EmptySearch from 'Components/search/EmptySearch';
import BookshelfList from 'Components/bookshelf/BookshelfList';

type RestProps = {
  isLoading: boolean,
  booksList: Array<Object>,
  changeShelfFor: Function,
}

type Props = {
  bookListNotEmpty: boolean,
  dirty: boolean,
  rest: RestProps,
}

const SearchPageContent = ({ bookListNotEmpty, dirty, ...rest }: Props) => (
  bookListNotEmpty
    ? <BookshelfList {...rest} isSearchPage />
    : <EmptySearch dirty={dirty} />
);

export default SearchPageContent;
