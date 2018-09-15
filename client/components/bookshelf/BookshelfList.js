// @flow
import * as React from 'react';
import styled from 'styled-components';
import sortBy from 'sort-by';

import Loading from 'Components/loading/Loading';
import BookshelfBook from 'Components/bookshelf/BookshelfBook';

type Props = {
  isLoading?: boolean,
  booksList: Array<Object>,
  changeShelfFor: Function,
  isSearchPage?: boolean,
}

/**
 * @constructor BookshelfList
 * @param {object} props - Bookshelf list props
 * @description Renders the books list
 */
const BookshelfList = (props: Props) => {
  const {
    isLoading,
    booksList,
    changeShelfFor,
    isSearchPage,
  } = props;

  // Create all books elements
  const books = booksList.map((bookInfo) => {
    const updateBook = changeShelfFor(bookInfo);
    const removeBook = changeShelfFor(bookInfo, true);

    return (
      <BookshelfBook
        key={bookInfo.id}
        updateBook={updateBook}
        removeBook={removeBook}
        bookInfo={bookInfo}
        isSearchPage={isSearchPage}
      />
    );
  });

  // Sort them by title
  const sortedBooks = books.sort(sortBy('props.bookInfo.title'));

  return (
    <BookshelfListContainer>
      {isLoading ? <Loading /> : sortedBooks}
    </BookshelfListContainer>
  );
};

BookshelfList.defaultProps = {
  isSearchPage: false,
  isLoading: false,
};

const BookshelfListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 0 55px 0 55px;
    justify-content: space-between;
  }
`;

export default BookshelfList;
