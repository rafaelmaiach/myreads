// @flow
import * as React from 'react';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import { getAll, search, update } from 'Utils/api/BooksAPI';
import { groupBooksByShelf } from 'Utils/helpers';

import GeneralScreen from 'Containers/GeneralScreen';
import Header from 'Components/header/Header';
import BackButton from 'Components/search/BackButton';
import SearchInput from 'Components/search/SearchInput';
import SearchPageContent from 'Components/search/SearchPageContent';
import Loading from 'Components/loading/Loading';
import searchPageImage from 'Assets/images/search_page.jpg';

type State = {
  isLoading: boolean,
  booksList: Array<React.Node>,
  searchInputText: string,
  dirty: false,
  isUpdatingBook: boolean,
  allBooks: Object
}

class SearchScreen extends React.Component<void, State> {
  state = {
    isLoading: false,
    booksList: [],
    searchInputText: '',
    dirty: false,
    allBooks: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
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
    const separateBooks = groupBooksByShelf(allBooks, 'id');

    this.setState(() => ({
      allBooks: { ...separateBooks },
      isLoading: false,
    }));
  }

  searchTextHasChanged = (value) => {
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
        isUpdatingBook: false,
        dirty: false,
        booksList: [],
      }));
    }
  }

  searchCallback = () => {
    const { searchInputText } = this.state;

    search(searchInputText)
      .then(this.getBooksFromResponse)
      .catch(this.getErrorFromResponse);
  }

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

  getErrorFromResponse = (error) => {
    console.log(`Error on search book: ${error.message}`);
    this.setState(() => ({ dirty: true }));
  }

  changeShelfFor = (book, isRemoveFunction = false) => (event) => {
    const { name: shelfToMove } = event.target;

    if (isRemoveFunction) {
      book.shelf = undefined; // eslint-disable-line
    }

    update(book, shelfToMove)
      .then(this.updateShelfForBooks)
      .catch(errorUpdate => console.log(`Error Update book on Search: ${errorUpdate.message}`));
  };

  updateShelfForBooks = (responseUpdate = null) => {
    const { booksList, allBooks } = this.state;
    const { currentlyReading, wantToRead, read } = allBooks;

    let crBooks = currentlyReading;
    let wtrBooks = wantToRead;
    let rBooks = read;

    if (responseUpdate) {
      const {
        currentlyReading: updatedCurrentlyReading,
        wantToRead: updatedWantToRead,
        read: updatedRead,
      } = responseUpdate;

      crBooks = updatedCurrentlyReading;
      wtrBooks = updatedWantToRead;
      rBooks = updatedRead;
    }

    const booksListUpdated = booksList.map((book) => {
      const { id } = book;
      const bookUpdated = { ...book };
      if (crBooks.includes(id)) {
        bookUpdated.shelf = 'currentlyReading';
      }

      if (wtrBooks.includes(id)) {
        bookUpdated.shelf = 'wantToRead';
      }

      if (rBooks.includes(id)) {
        bookUpdated.shelf = 'read';
      }

      return bookUpdated;
    });

    this.setState(() => ({ booksList: booksListUpdated }));
  }

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
