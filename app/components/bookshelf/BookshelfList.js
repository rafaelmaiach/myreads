// @flow
import * as React from 'react';
import styled from 'styled-components';
import sortBy from 'sort-by';

import Loading from 'Components/loading/Loading';
import BookshelfBook from 'Components/bookshelf/BookshelfBook';

type Props = {
  isLoading: boolean,
  booksList: Array<Object>,
  changeShelfFor: Function,
}

const BookshelfList = ({ isLoading, booksList, changeShelfFor }: Props) => {
  const books = booksList.map((bookInfo) => {
    const updateBook = changeShelfFor(bookInfo);
    return <BookshelfBook key={bookInfo.id} updateBook={updateBook} bookInfo={bookInfo} />;
  });

  const sortedBooks = books.sort(sortBy('props.bookInfo.title'));

  return (
    <BookshelfListContainer>
      {isLoading ? <Loading /> : sortedBooks}
    </BookshelfListContainer>
  );
};

const BookshelfListContainer = styled.div`
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
