// @flow
import * as React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';

import Header from 'Components/header/Header';
import HeaderTab from 'Components/header/HeaderTab';

import SearchIcon from 'Assets/icons/search.svg';

type Props = {
  changeShelf: Function,
  currentShelf: string,
  history: Function,
}

const BookshelfHeader = ({ changeShelf, currentShelf, history }: Props) => {
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

  const goToSearchPage = () => {
    history.push('/search');
  };

  return (
    <Header>
      <BookshelfHeaderTabs>
        {headerTabs}
      </BookshelfHeaderTabs>
      <BookshelfHeaderSearchIconContainer>
        <BookshelfHeaderSearchIcon src={SearchIcon} onClick={goToSearchPage} />
      </BookshelfHeaderSearchIconContainer>
    </Header>
  );
};

const BookshelfHeaderTabs = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding-left: 10px;
`;

const BookshelfHeaderSearchIconContainer = styled.div`
  display: flex;
  width: 10%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  &:hover {
    background-color: #4cc984;
  }
`;

const BookshelfHeaderSearchIcon = styled.img`
  width: 70%;
  height: 70%;
  pointer-events: auto;
  cursor: pointer;
`;

export default withRouter(BookshelfHeader);
