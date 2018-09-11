// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  onClick: Function,
  text: string,
  active: boolean,
}

const HeaderTabButton = ({ active, onClick, text }: Props) => (
  <Button active={active} type="button" onClick={onClick}>
    {text}
  </Button>
);

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

@media only screen and (min-width: 1200px) {
  font-size: 24px;
}
`;

export default onlyUpdateForKeys(['active'])(HeaderTabButton);
