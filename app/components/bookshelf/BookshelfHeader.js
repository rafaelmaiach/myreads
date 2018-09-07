// @flow
import * as React from 'react';
import styled from 'styled-components';

import Header from 'Components/header/Header';
import HeaderTab from 'Components/header/HeaderTab';

type Props = {
  changeShelf: Function,
}

const BookshelfHeader = ({ changeShelf }: Props) => {
  const shelfsTab = [
    {
      text: 'Currently Reading',
      onClick: () => changeShelf('currentlyReading'),
    },
    {
      text: 'Want to Read',
      onClick: () => changeShelf('wantToRead'),
    },
    {
      text: 'Reading',
      onClick: () => changeShelf('read'),
    },
  ];

  const headerTabs = shelfsTab.map(({ text, onClick }) => (
    <HeaderTab
      key={text}
      text={text}
      onClick={onClick}
    />));

  return (
    <Header>
      <Tabs>
        {headerTabs}
      </Tabs>
    </Header>
  );
};

const Tabs = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding-left: 10px;
`;

export default BookshelfHeader;
