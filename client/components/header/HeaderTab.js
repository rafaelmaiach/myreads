// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  text: string,
  active: boolean,
  onClick: Function,
}

/**
 * @constructor HeaderTab
 * @param {boolean} active - Tab status
 * @param {string} text - Tab text
 * @param {function} onClick - Tab function
 * @description Renders header tab
 */
const HeaderTab = ({ active, text, onClick }: Props) => (
  <Tab active={active}>
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  </Tab>
);

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background-color: ${({ active }) /* istanbul ignore next */ => active ? '#4cc984' : ''};

  &:hover {
    background-color: #4cc984;
  }

  @media only screen and (min-width: 768px) {
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
  padding: 0 10px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

/* istanbul ignore next */
export default onlyUpdateForKeys(['active', 'text'])(HeaderTab);
