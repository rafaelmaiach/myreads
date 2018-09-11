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
  <Tab active={active} data-shelf={text}>
    <HeaderTabButton active={active} onClick={onClick} text={text} />
  </Tab>
);

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  &[data-shelf="Currently Reading"] {
    background-color: ${props => props.active && '#f49542'};
  }

  &[data-shelf="Want to Read"] {
    background-color: ${props => props.active && '#635eed'};
  }

  &[data-shelf="Read"] {
    background-color: ${props => props.active && '#f25252'};
  }

  &:hover {
    &[data-shelf="Currently Reading"] {
      background-color: #f49542;
    }

    &[data-shelf="Want to Read"] {
      background-color: #635eed;
    }

    &[data-shelf="Read"] {
      background-color: #f25252;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin: 0 10px;
  }
`;

export default onlyUpdateForKeys(['active'])(HeaderTab);
