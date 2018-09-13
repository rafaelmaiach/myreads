// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import HeaderTabButton from './HeaderTabButton';

type Props = {
    text: string,
    active: boolean,
    onClick: Function,
}

const HeaderTab = ({ active, text, onClick }: Props) => (
  <Tab active={active}>
    <HeaderTabButton active={active} onClick={onClick} text={text} />
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

  @media only screen and (min-width: 768px) {
    margin: 0 10px;
  }
`;

export default onlyUpdateForKeys(['active', 'text'])(HeaderTab);
