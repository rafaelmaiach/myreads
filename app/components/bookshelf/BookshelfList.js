// @flow
import * as React from 'react';

import {
  ListContainer,
} from 'Styles/components/bookshelf/_BookshelfList';

import Loading from 'Components/loading/Loading';
import BookshelfBook from 'Components/bookshelf/BookshelfBook';

type Props = {
  isLoading: boolean,
  booksList: Array<Object>,
}

const BookshelfList = ({ isLoading, booksList }: Props) => {
  const books = booksList.map(info => <BookshelfBook key={info.id} {...info} />);
  return (
    <ListContainer>
      {isLoading ? <Loading /> : books}
    </ListContainer>
  );
};

export default BookshelfList;
