// @flow
import * as React from 'react';
import styled from 'styled-components';

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

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 55px 0 55px;
  overflow-y: scroll;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

export default BookshelfList;
