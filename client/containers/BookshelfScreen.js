// @flow
import * as React from 'react';

import { getAll, update } from 'Utils/api/BooksAPI';
import { groupBooksByShelf } from 'Utils/helpers';

import GeneralScreen from 'Containers/GeneralScreen';
import BookshelfHeader from 'Components/bookshelf/BookshelfHeader';
import BookshelfList from 'Components/bookshelf/BookshelfList';

import bookshelfPageImage from 'Assets/images/bookshelf_page.jpg';

type State = {
  currentlyReading: Array<Object>,
  wantToRead: Array<Object>,
  read: Array<Object>,
  currentShelf: string,
  isLoading: boolean,
}

/**
 * @class BookshelfScreen
 * @description Renders the current bookshelf
 */
class BookshelfScreen extends React.PureComponent<void, State> {
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

  /**
   * @method BookshelfScreen#separateBooks
   * @param {array} allBooks - List of all books for each shelf
   * @description Separate the books on each shelf
   */
  separateBooks = (allBooks: Array<Object>) => {
    const separateBooks = groupBooksByShelf(allBooks);

    this.setState(() => ({
      ...separateBooks,
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
  changeShelfFor = (book: Object, isRemoveFunction: boolean = false) => (event: Object) => {
    const { name: shelfToMove } = event.target;

    // If remove, deletes the shelf
    if (isRemoveFunction) {
      delete book.shelf; // eslint-disable-line
    }

    // Calls the update api
    // As callback, pass the result, the shelf to move and the book id
    update(book, shelfToMove)
      .then(result => this.updateShelfs(result, shelfToMove, book.id))
      .catch(errorUpdate => console.log(`Error Update book: ${errorUpdate}`));
  };

  /**
   * @method BookshelfScreen#updateShelfs
   * @param {object} resultBooks - List of books id on each shelf
   * @param {string} movedShelfName - Name of shelf the book was moved / removed (shelf name == none)
   * @param {string} bookMovedId - Id of the moved book
   */
  updateShelfs = (resultBooks: Object, movedShelfName: string, bookMovedId: string) => {
    const {
      // Name of the current shelf
      currentShelf,
      // Get the current state of array that corresponds to the current shelf and name it as oldCurrentShelf
      [currentShelf]: oldCurrentShelf,
      // Get the current state of array that corresponds to the shelf the book is being moved
      [movedShelfName]: oldMovedShelf,
    } = this.state;

    const {
      // Get the updated array of the current shelf. This array doesn't contain the id of the book that was moved or removed
      [currentShelf]: oldShelfUpdated,
    } = resultBooks;

    // Get the moving book from the current shelf
    const movingBook = oldCurrentShelf.find(book => book.id === bookMovedId);

    // Creates the new current book list for the current shelf by filtering the current book list
    // and getting only those who still are on the updated list
    const newCurrentShelf = oldCurrentShelf.filter(book => oldShelfUpdated.includes(book.id));

    // If is not none, so we are moving the book to another shelf, so we need to update the
    // oldMovedShelf, who represents the shelf that can receive the book if this condition is true
    if (movedShelfName !== 'none') {
      // create a new book
      const newMovingBook = { ...movingBook, shelf: movedShelfName };

      // Create a new book list for the moved shelf using the existing books plus the one who was moved to it
      const newMovedShelf = [...oldMovedShelf, newMovingBook];

      // Update the current shelf and the moved shelf
      this.setState(() => ({
        [currentShelf]: newCurrentShelf,
        [movedShelfName]: newMovedShelf,
      }));
      return;
    }

    // Update only the current shelf, because the moved was none, so it was a remove action
    this.setState(() => ({
      [currentShelf]: newCurrentShelf,
    }));
  }

  /**
   * @method BookshelfScreen#changeShelf
   * @param {string} newShelf
   * @description Change the shelf
   */
  changeShelf = (newShelf: string) => this.setState(() => ({ currentShelf: newShelf }));

  render() {
    const { isLoading, currentShelf, [currentShelf]: shelfToRender } = this.state;

    return (
      <GeneralScreen image={bookshelfPageImage}>
        <BookshelfHeader currentShelf={currentShelf} changeShelf={this.changeShelf} />
        <BookshelfList
          isLoading={isLoading}
          booksList={shelfToRender}
          changeShelfFor={this.changeShelfFor}
        />
      </GeneralScreen>
    );
  }
}

export default BookshelfScreen;
