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
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 0 55px 0 55px;
    margin-bottom: 15px;
  }
`;

export default BookshelfList;
