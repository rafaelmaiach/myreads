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
  margin: 15px;
`;

const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  background: none;
  font-size: 1.3rem;
  font-weight: 600;
  color: #edf5e1;
  cursor: pointer;

  &:hover {
    color: #4cc984;
  }
`;

export default onlyUpdateForKeys(['text'])(HeaderTab);
