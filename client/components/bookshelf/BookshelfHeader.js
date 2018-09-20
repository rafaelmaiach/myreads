// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import Header from 'Components/header/Header';
import UserLogout from 'Components/header/HeaderUserLogout';
import HeaderTab from 'Components/header/HeaderTab';
import HeaderSearchIcon from 'Components/header/HeaderSearchIcon';

/**
 * @constructor BookshelfHeader
 * @param {function} changeShelf - Function to change the bookshelf screen to other bookshelf
 * @param {string} currentShelf - Current shelf name
 * @description Renders the Header on bookshelf screen
 */
const BookshelfHeader = () => {
  // Creates info to each header tab
  const shelfsTab = [
    {
      shelf: 'currentlyReading',
      text: 'Currently Reading',
    },
    {
      shelf: 'wantToRead',
      text: 'Want to Read',
    },
    {
      shelf: 'read',
      text: 'Read',
    },
  ];

  // Create each header tab
  const headerTabs = shelfsTab.map(({ shelf, text }) => (
    <HeaderTab
      key={shelf}
      text={text}
      shelf={shelf}
    />));

  return (
    <Header>
      <UserLogout />
      <BookshelfHeaderTabs>
        {headerTabs}
      </BookshelfHeaderTabs>
      <HeaderSearchIcon />
    </Header>
  );
};

const BookshelfHeaderTabs = styled.div`
  display: flex;
  width: 65%;
  justify-content: flex-start;
`;

export default onlyUpdateForKeys(['currentShelf'])(BookshelfHeader);
