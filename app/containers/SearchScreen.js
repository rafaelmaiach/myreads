// @flow
import * as React from 'react';

import GeneralScreen from 'Containers/GeneralScreen';
import BookshelfList from 'Components/bookshelf/BookshelfList';
import { HeaderContainer } from 'Styles/common/CommonComponents';

import searchPageImage from 'Assets/images/search_page.jpg';

type State = {
  isLoading: boolean,
  booksList: Array<React.Node>
}

class BookshelfScreen extends React.Component<void, State> {
  state = {
    isLoading: false,
    booksList: [],
  }

  render() {
    const { isLoading, booksList } = this.state;

    return (
      <GeneralScreen image={searchPageImage}>
        <HeaderContainer>
          <div>Oi</div>
        </HeaderContainer>
        <BookshelfList
          isLoading={isLoading}
          booksList={booksList}
        />
      </GeneralScreen>
    );
  }
}

export default BookshelfScreen;
