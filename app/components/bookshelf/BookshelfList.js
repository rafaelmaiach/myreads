// @flow
import * as React from 'react';

import {
  ListContainer,
} from 'Styles/components/bookshelf/_BookshelfList';

import Loading from 'Components/loading/Loading';
import BookshelfBook from 'Components/bookshelf/BookshelfBook';

type Props = {
  isLoading: boolean,
  shelfToRender: Array<Object>,
}

const BookshelfList = ({ isLoading, shelfToRender }: Props) => {
  const books = shelfToRender.map(info => <BookshelfBook key={info.id} {...info} />);
  return (
    <ListContainer>
      {isLoading ? <Loading /> : books}
    </ListContainer>
  );
};

export default BookshelfList;
