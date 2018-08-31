import React from 'react';

import LogoIcon from 'Assets/icons/logo.svg';
import {
  BookshelfHeader as Header,
  LogoContainer,
  Tabs,
  Tab,
} from 'Styles/components/bookshelf/_BookshelfHeader';

const BookshelfHeader = () => (
  <Header>
    <LogoContainer>
      <img src={LogoIcon} alt="MyReads Logo" />
      <span>MYREADS</span>
    </LogoContainer>
    <Tabs>
      <Tab>Currently Reading</Tab>
      <Tab>Want to Read</Tab>
      <Tab>Already Read</Tab>
    </Tabs>
  </Header>
);

export default BookshelfHeader;
