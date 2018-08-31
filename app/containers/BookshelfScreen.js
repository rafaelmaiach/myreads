// @flow
import * as React from 'react';

import { getAll } from 'Utils/api/BooksAPI';
import { groupBooksByShelf } from 'Utils/api/helpers';

import Loading from 'Components/loading/Loading';

import BookshelfHeader from 'Components/bookshelf/BookshelfHeader';
import BookshelfList from 'Components/bookshelf/BookshelfList';
import BookshelfAddMore from 'Components/bookshelf/BookshelfAddMore';

import {
  Background,
  BackgroundLayer,
} from 'Styles/components/bookshelf/_BookshelfScreen';

type State = {
  currentlyReadingBooks: Array,
  wantToReadBooks: Array,
  readBooks: Array,
  currentShelf: string,
}

class BookshelfScreen extends React.Component<void, State> {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    currentShelf: 'currentlyReading', // currentlyReading, wantToRead, read
    isLoading: false,
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    this.setState(
      () => ({ isLoading: true }),
      () => {
        getAll()
          .then(this.separateBooks)
          .catch(error => console.log(error));
      }
    );
  }

  separateBooks = (allBooks) => {
    const separateBooks = groupBooksByShelf(allBooks);

    this.setState(() => ({
      ...separateBooks,
      isLoading: false,
    }));
  }

  render() {
    const { isLoading } = this.state;
    console.log(this.state);
    return (
      <Background>
        <BackgroundLayer>
          <BookshelfHeader />
          {
            isLoading
              ? <Loading />
              : (
                <React.Fragment>
                  <BookshelfList />
                  <BookshelfAddMore />
                </React.Fragment>
              )
          }
        </BackgroundLayer>
      </Background>
    );
  }
}

export default BookshelfScreen;
