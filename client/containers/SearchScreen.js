// @flow
import * as React from 'react';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import { getAll, search, update } from 'Utils/api/BooksAPI';

import GeneralScreen from 'Containers/GeneralScreen';
import Header from 'Components/header/Header';
import BackButton from 'Components/search/BackButton';
import SearchInput from 'Components/search/SearchInput';
import SearchPageContent from 'Components/search/SearchPageContent';
import Loading from 'Components/loading/Loading';
import searchPageImage from 'Assets/images/search_page.jpg';

type AllBooks = {
  currentlyReading: Array<Object>,
  wantToRead: Array<Object>,
  read: Array<Object>,
}

type State = {
  isLoading: boolean,
  booksList: Array<Object>,
  searchInputText: string,
  dirty: boolean,
  allBooks: AllBooks,
}

/**
 * @class SearchScreen
 * @description Represents the Search page where the user can search for a book and
 * move it or remove it from a shelf
 */
class SearchScreen extends React.Component<void, State> {
  state = {
    isLoading: false,
    booksList: [], // List of books to be rendered
    searchInputText: '', // Search text to use on search api
    dirty: false, // Checks if the user has write something on search input
    allBooks: [],
  }

  componentDidMount() {
    this.getAllBooks();
  }

  /**
   * @method SearchScreen#getAllBooks
   * @description Get the result of getAll api and calls a function to separate
   * the books on each shelf
   */
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
   * @method SearchScreen#searchTextHasChanged
   * @param {string} value - The text on search input
   * @description Updates the searchInputText state after the user write
   * something on search input. As a callback, it calls the search api if the value
   * is valid.
   */
  searchTextHasChanged = (value: string) => {
    if (value.trim()) {
      this.setState(
        () => ({
          isLoading: true,
          searchInputText: value,
        }), this.searchCallback
      );
    } else {
      this.setState(() => ({
        isLoading: false,
        dirty: false,
        booksList: [],
      }));
    }
  }

  /**
   * @method SearchScreen#searchCallback
   * @description Calls the search api to retrieve the books from the query
   */
  searchCallback = () => {
    const { searchInputText } = this.state;

    search(searchInputText)
      .then(this.getBooksFromResponse)
      .catch(this.getErrorFromResponse);
  }

  /**
   * @method SearchScreen#getBooksFromResponse
   * @param {object} response - Result from search api
   * @description Set the state to error or set the books list with books found
   */
  getBooksFromResponse = (response) => {
    if (response.error) {
      this.setState(() => ({
        isLoading: false,
        booksList: [],
        dirty: true,
      }));

      return;
    }

    this.setState(() => ({
      isLoading: false,
      booksList: [...response],
      dirty: true,
    }), this.updateShelfForBooks);
  }

  /**
   * @method SearchScreen#getErrorFromResponse
   * @param {object} error - Error message
   * @description Get the error message from search
   */
  getErrorFromResponse = (error) => {
    console.log(`Error on search book: ${error.message}`);
    this.setState(() => ({ dirty: true }));
  }

  /**
   * @method SearchScreen#changeShelfFor
   * @param {string} shelfToMove - Shelf to move
   * @description Update the books list with the updated book
   */
  updateShelfForBooks = (currBook: Object = null) => {
    const { booksList, allBooks } = this.state;

    // Go through each book and update its shelf tag
    const booksListUpdated = booksList.map((book) => {
      const { id } = book;
      const bookUpdated = { ...book };

      const existingBook = allBooks.find(b => b.id === id);

      if (existingBook) {
        bookUpdated.shelf = existingBook.shelf;
      }

      return bookUpdated;
    });

    if (currBook) {
      const newCurrBook = { ...currBook };
      const newBooksList = booksListUpdated.filter(b => b.id !== newCurrBook.id).concat(newCurrBook);
      this.setState(() => ({ booksList: newBooksList }));
      return;
    }

    this.setState(() => ({ booksList: booksListUpdated }));
  }

  /**
   * @method SearchScreen#changeShelfFor
   * @param {object} book - Book information
   * @param {boolean} isRemoveFunction - Knows if the change shelf will be to remove or to move
   * @description Creates a closure for each book have its own change shelf functionality
   * @returns Returns a function that will get the book information and move it or remove it from a shelf
   */
  changeShelfFor = (book, isRemoveFunction = false) => (event) => {
    const { name: shelfToMove } = event.target;

    // To remove a book from a shelf, delete the shelf property
    // The "none" shelf is being set on JSX for dropdown item remove
    if (isRemoveFunction) {
      delete book.shelf; // eslint-disable-line
    } else {
      book.shelf = shelfToMove; // eslint-disable-line
    }

    // Calls the update api to move/remove the book
    update(book, shelfToMove)
      .then(() => this.updateShelfForBooks(book))
      .catch(errorUpdate => console.log(`Error Update book on Search: ${errorUpdate.message}`));
  };

  render() {
    const {
      isLoading,
      booksList,
      dirty,
    } = this.state;

    const bookListNotEmpty = booksList.length !== 0;

    return (
      <GeneralScreen image={searchPageImage}>
        <Header>
          <BackButton />
          <SearchInput textHasChanged={this.searchTextHasChanged} />
        </Header>
        {isLoading
          ? <Loading />
          : (
            <SearchPageContent
              bookListNotEmpty={bookListNotEmpty}
              isLoading={isLoading}
              booksList={booksList}
              changeShelfFor={this.changeShelfFor}
              dirty={dirty}
            />)
        }
      </GeneralScreen>
    );
  }
}

const keys = ['isLoading', 'searchInputText', 'dirty'];

export default onlyUpdateForKeys(keys)(SearchScreen);
