// @flow
import * as React from 'react';

import { getAll } from 'Utils/api/BooksAPI';
import { groupBooksByShelf } from 'Utils/api/helpers';

import BookshelfHeader from 'Components/bookshelf/BookshelfHeader';
import BookshelfList from 'Components/bookshelf/BookshelfList';

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
    // These three arrays will be used on shelfToRender variable
    currentlyReading: [], // eslint-disable-line
    wantToRead: [], // eslint-disable-line
    read: [], // eslint-disable-line
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

  changeShelf = newShelf => this.setState(() => ({ currentShelf: newShelf }));

  render() {
    const { isLoading, currentShelf, [currentShelf]: shelfToRender } = this.state;

    return (
      <Background>
        <BackgroundLayer>
          <BookshelfHeader changeShelf={this.changeShelf} />
          <BookshelfList
            isLoading={isLoading}
            shelfToRender={shelfToRender}
          />
        </BackgroundLayer>
      </Background>
    );
  }
}

export default BookshelfScreen;
