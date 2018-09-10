// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import HeaderTabButton from './HeaderTabButton';

type TabProps = {
  text: string,
  active: boolean,
  onClick: Function,
}

const HeaderTab = ({ active, text, onClick }: TabProps) => (
  <Tab active={active}>
    <HeaderTabButton onClick={onClick} text={text} />
  </Tab>
);

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background-color: ${({ active }) => active ? '#4cc984' : ''};

  &:hover {
    background-color: #4cc984;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0 10px;
  }
`;

export default onlyUpdateForKeys(['active'])(HeaderTab);
