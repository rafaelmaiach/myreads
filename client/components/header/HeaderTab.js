// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  text: string,
  shelf: string,
}

/**
 * @constructor HeaderTab
 * @param {boolean} active - Tab status
 * @param {string} text - Tab text
 * @description Renders header tab
 */
const HeaderTab = (props: Props) => {
  const {
    text,
    shelf,
  } = props;

  return (
    <Tab>
      <Button href={`#${shelf}`}>
        {text}
      </Button>
    </Tab>
  );
};

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  &:hover {
    background-color: #4cc984;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 10px;
  }
`;

const Button = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #edf5e1;
  cursor: pointer;
  font-size: 12px;
  pointer-events: auto;
  padding: 0 10px;

  @media only screen and (min-width: 768px) {
    font-size: 21px;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 26px;
  }
`;

/* istanbul ignore next */
export default onlyUpdateForKeys(['text'])(HeaderTab);
