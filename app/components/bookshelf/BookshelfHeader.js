// @flow
import * as React from 'react';

import LogoIcon from 'Assets/icons/logo.svg';
import {
  BookshelfHeader as Header,
  LogoContainer,
  Tabs,
  Tab,
  Button,
} from 'Styles/components/bookshelf/_BookshelfHeader';

type Props = {
  changeShelf: Function,
}

const BookshelfHeader = ({ changeShelf }: Props) => {
  const changeToShelfCurrentlyReading = () => changeShelf('currentlyReading');
  const changeToShelfWantToRead = () => changeShelf('wantToRead');
  const changeToShelfRead = () => changeShelf('read');

  return (
    <Header>
      <LogoContainer>
        <img src={LogoIcon} alt="MyReads Logo" />
        <span>MYREADS</span>
      </LogoContainer>
      <Tabs>
        <Tab>
          <Button type="button" onClick={changeToShelfCurrentlyReading}>Currently Reading</Button>
        </Tab>
        <Tab>
          <Button type="button" onClick={changeToShelfWantToRead}>Want to Read</Button>
        </Tab>
        <Tab>
          <Button type="button" onClick={changeToShelfRead}>Already Read</Button>
        </Tab>
      </Tabs>
    </Header>
  );
};

export default BookshelfHeader;
