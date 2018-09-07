// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type TabProps = {
  text: string,
  onClick: Function,
}

const HeaderTab = ({ text, onClick }: TabProps) => (
  <Tab>
    <Button type="button" onClick={onClick}>{text}</Button>
  </Tab>
);

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  background: none;
  font-weight: 600;
  color: #edf5e1;
  cursor: pointer;
  font-size: 10px;

  &:hover {
    color: #4cc984;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 24px;
    margin: 0 10px;
  }
`;

export default onlyUpdateForKeys(['text'])(HeaderTab);
