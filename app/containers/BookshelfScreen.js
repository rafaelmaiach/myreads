// @flow
import * as React from 'react';

import { getAll } from 'Utils/api/BooksAPI';
import { groupBooksByShelf } from 'Utils/helpers';

import GeneralScreen from 'Containers/GeneralScreen';
import BookshelfHeader from 'Components/bookshelf/BookshelfHeader';
import BookshelfList from 'Components/bookshelf/BookshelfList';

import bookshelfPageImage from 'Assets/images/bookshelf_page.jpg';

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
      <GeneralScreen image={bookshelfPageImage}>
        <BookshelfHeader changeShelf={this.changeShelf} />
        <BookshelfList
          isLoading={isLoading}
          booksList={shelfToRender}
        />
      </GeneralScreen>
    );
  }
}

export default BookshelfScreen;
