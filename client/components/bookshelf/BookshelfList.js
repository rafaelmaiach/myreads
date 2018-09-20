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

  const getBookComponent = listOfBooks => listOfBooks.map((bookInfo) => {
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

  const getCorrespondingBookList = (books, shelf, title) => {
    const shelfBooks = getBookComponent(books.filter(b => b.shelf === shelf));

    return ({
      id: shelf,
      shelfBooks: shelfBooks.sort(sortBy('props.bookInfo.title')),
      title,
    });
  };

  if (isSearchPage) {
    const books = getBookComponent(booksList);

    const sortedBooks = books.sort(sortBy('props.bookInfo.title'));

    return (
      <BookshelfListContainer>
        {isLoading ? <Loading /> : sortedBooks}
      </BookshelfListContainer>
    );
  }

  const crBooks = getCorrespondingBookList(booksList, 'currentlyReading', 'Currently Reading');
  const wrBooks = getCorrespondingBookList(booksList, 'wantToRead', 'Want to Read');
  const rBooks = getCorrespondingBookList(booksList, 'read', 'Read');

  const bookshelfs = [crBooks, wrBooks, rBooks].map(({ id, shelfBooks, title }) => (
    <BookshelfContainer key={id} id={id}>
      <BookshelfTitle>{title}</BookshelfTitle>
      <BookshelfBookList>
        {shelfBooks}
      </BookshelfBookList>
    </BookshelfContainer>
  ));

  return (
    <BookshelfListContainer>
      {isLoading ? <Loading /> : bookshelfs}
    </BookshelfListContainer>
  );
};

BookshelfList.defaultProps = {
  isSearchPage: false,
  isLoading: false,
};

const BookshelfListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  overflow-y: scroll;

  @media only screen and (min-width: 1025px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 0 55px 0 55px;
    justify-content: space-between;
  }
`;

const BookshelfContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BookshelfTitle = styled.h1`
  width: 95%;
  background-color: #4cc984;
  color: #edf5e1;
  padding: 10px;
  margin: 30px 10px 0 10px;
  font-size: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media only screen and (min-width: 1025px) {
    width: 99%;
  }
`;

const BookshelfBookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export default BookshelfList;
