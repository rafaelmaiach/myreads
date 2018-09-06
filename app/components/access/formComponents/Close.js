// @flow
import * as React from 'react';
import styled from 'styled-components';

const Close = ({ returnStartScreen }: Function) => (
  <CloseButton
    type="button"
    onClick={returnStartScreen}
  >
    X
  </CloseButton>
);

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 35px;
  padding: 10px;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  color: #05386b;

  &:hover {
    color: #4cc984;
  }
`;

export default Close;
