// @flow
import * as React from 'react';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import { getAll, search, update } from 'Utils/api/BooksAPI';
import { groupBooksByShelf } from 'Utils/helpers';

import GeneralScreen from 'Containers/GeneralScreen';
import Header from 'Components/header/Header';
import BackButton from 'Components/search/BackButton';
import SearchInput from 'Components/search/SearchInput';
import EmptySearch from 'Components/search/EmptySearch';
import BookshelfList from 'Components/bookshelf/BookshelfList';

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
    isUpdatingBook: false,
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
    this.setState(
      () => ({
        isLoading: true,
        searchInputText: value,
      }), this.searchCallback
    );
  }

  searchCallback = () => {
    const { searchInputText } = this.state;

    if (searchInputText.trim()) {
      search(searchInputText)
        .then(this.getBooksFromResponse)
        .catch(this.getErrorFromResponse);
    }
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
      booksList: [...response],
      dirty: true,
    }), this.updateShelfForBooks);
  }

  getErrorFromResponse = (error) => {
    console.log(`Error on search book: ${error.message}`);
    this.setState(() => ({ dirty: true }));
  }

  changeShelfFor = book => (event) => {
    const { name: shelfToMove } = event.target;

    this.setState(
      () => ({ isLoading: true, isUpdatingBook: true }),
      () => {
        update(book, shelfToMove)
          .then(this.updateShelfForBooks)
          .catch(errorUpdate => console.log(`Error Update book on Search: ${errorUpdate.message}`));
      }
    );
  };

  updateShelfForBooks = (responseUpdate = null) => {
    const { booksList, allBooks } = this.state;
    const { currentlyReading, wantToRead, read } = allBooks;

    let crBooks = [...currentlyReading];
    let wtrBooks = [...wantToRead];
    let rBooks = [...read];

    if (responseUpdate) {
      const {
        currentlyReading: updatedCurrentlyReading,
        wantToRead: updatedWantToRead,
        read: updatedRead,
      } = responseUpdate;

      crBooks = [...Array.from(new Set([...crBooks, ...updatedCurrentlyReading]))];
      wtrBooks = [...Array.from(new Set([...wtrBooks, ...updatedWantToRead]))];
      rBooks = [...Array.from(new Set([...rBooks, ...updatedRead]))];
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

    this.setState(() => ({
      isLoading: false,
      isUpdatingBook: false,
      booksList: booksListUpdated,
    }));
  }

  render() {
    const {
      isLoading,
      booksList,
      dirty,
      isUpdatingBook,
    } = this.state;

    const bookListNotEmpty = booksList.length !== 0;

    return (
      <GeneralScreen image={searchPageImage}>
        <Header>
          <BackButton />
          <SearchInput textHasChanged={this.searchTextHasChanged} />
        </Header>
        {bookListNotEmpty && isLoading === false
          ? (
            <BookshelfList
              isLoading={isLoading}
              booksList={booksList}
              changeShelfFor={this.changeShelfFor}
            />
          )
          : <EmptySearch dirty={dirty} isUpdatingBook={isUpdatingBook} />
        }
      </GeneralScreen>
    );
  }
}

export default onlyUpdateForKeys(['searchInputText'])(SearchScreen);
