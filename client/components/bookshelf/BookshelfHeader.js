// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import Header from 'Components/header/Header';
import HeaderTab from 'Components/header/HeaderTab';
import HeaderSearchIcon from 'Components/header/HeaderSearchIcon';

type Props = {
  changeShelf: Function,
  currentShelf: string,
}

const BookshelfHeader = ({ changeShelf, currentShelf }: Props) => {
  const shelfsTab = [
    {
      shelf: 'currentlyReading',
      text: 'Currently Reading',
      onClick: () => changeShelf('currentlyReading'),
    },
    {
      shelf: 'wantToRead',
      text: 'Want to Read',
      onClick: () => changeShelf('wantToRead'),
    },
    {
      shelf: 'read',
      text: 'Read',
      onClick: () => changeShelf('read'),
    },
  ];

  const headerTabs = shelfsTab.map(({ shelf, text, onClick }) => (
    <HeaderTab
      key={shelf}
      active={currentShelf === shelf}
      text={text}
      onClick={onClick}
    />));

  return (
    <Header>
      <BookshelfHeaderTabs>
        {headerTabs}
      </BookshelfHeaderTabs>
      <HeaderSearchIcon />
    </Header>
  );
};

const BookshelfHeaderTabs = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding-left: 10px;
`;

export default onlyUpdateForKeys(['currentShelf'])(BookshelfHeader);
