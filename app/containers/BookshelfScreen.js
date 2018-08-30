import * as React from 'react';

import { getAll } from 'Utils/api/BooksAPI';

import BookshelfHeader from 'Components/bookshelf/BookshelfHeader';
import BookshelfList from 'Components/bookshelf/BookshelfList';
import BookshelfAddMore from 'Components/bookshelf/BookshelfAddMore';

class BookshelfScreen extends React.Component {
  state = {
    currentShelf: 'reading', // toread, reading, read
  }

  async componentDidMount() {
    const x = await getAll();
    console.log(x);
  }

  render() {
    return (
      <React.Fragment>
        <BookshelfHeader />
        <BookshelfList />
        <BookshelfAddMore />
      </React.Fragment>
    );
  }
}

export default BookshelfScreen;
