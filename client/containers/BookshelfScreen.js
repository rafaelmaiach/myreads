// @flow
import * as React from 'react';

import { getAll, update } from 'Utils/api/BooksAPI';

import GeneralScreen from 'Containers/GeneralScreen';
import BookshelfHeader from 'Components/bookshelf/BookshelfHeader';
import BookshelfList from 'Components/bookshelf/BookshelfList';

import bookshelfPageImage from 'Assets/images/bookshelf_page.jpg';

type State = {
  allBooks: Array<Object>,
  isLoading: boolean,
}

/**
 * @class BookshelfScreen
 * @description Renders the current bookshelf
 */
class BookshelfScreen extends React.PureComponent<void, State> {
  state = {
    // These three arrays will be used on shelfToRender variable
    allBooks: [],
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
          .then(this.saveBooks)
          .catch(error => console.log(error));
      }
    );
  }

  /**
   * @method BookshelfScreen#saveBooks
   * @param {array} allBooks - List of all books for each shelf
   * @description Save all books
   */
  saveBooks = (allBooks: Array<Object>) => {
    this.setState(() => ({
      allBooks,
      isLoading: false,
    }));
  }

  /**
   * @method BookshelfScreen#changeShelfFor
   * @param {object} book - Book information
   * @param {boolean} isRemoveFunction - Knows if the change shelf will be to remove or to move
   * @description Creates a closure for each book have its own change shelf functionality
   * @returns Returns a function that will get the book information and move it or remove it from a shelf
   */
  changeShelfFor = (book: Object) => (event: Object) => {
    const { name: shelfToMove } = event.target;

    // Calls the update api
    // As callback, pass the new shelf and the book
    update(book, shelfToMove)
      .then(() => this.updateShelf(shelfToMove, book))
      .catch(errorUpdate => console.log(`Error Update book: ${errorUpdate}`));
  };

  /**
   * @method BookshelfScreen#updateShelf
   * @param {string} movedShelfName - Name of shelf the book was moved / removed (shelf name == none)
   * @param {object} book - Book to move
   */
  updateShelf = (movedShelfName: string, book: Object) => {
    const updatedBook = { ...book };
    const { allBooks } = this.state;

    updatedBook.shelf = movedShelfName;
    const newBooks = allBooks.filter(b => b.id !== updatedBook.id).concat(updatedBook);
    this.setState(() => ({ allBooks: newBooks }));
  }

  render() {
    const {
      isLoading,
      allBooks,
    } = this.state;

    return (
      <GeneralScreen image={bookshelfPageImage}>
        <BookshelfHeader />
        <BookshelfList
          isLoading={isLoading}
          booksList={allBooks}
          changeShelfFor={this.changeShelfFor}
        />
      </GeneralScreen>
    );
  }
}

export default BookshelfScreen;
