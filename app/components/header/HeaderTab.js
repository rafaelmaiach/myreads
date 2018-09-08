// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type TabProps = {
  text: string,
  active: boolean,
  onClick: Function,
}

const HeaderTab = ({ active, text, onClick }: TabProps) => (
  <Tab active={active}>
    <Button type="button" onClick={onClick}>{text}</Button>
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

const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  background: none;
  font-weight: 600;
  color: #edf5e1;
  cursor: pointer;
  font-size: 10px;
  pointer-events: auto;

  @media only screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export default onlyUpdateForKeys(['text', 'active'])(HeaderTab);
