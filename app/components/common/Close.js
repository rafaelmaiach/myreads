// @flow
import * as React from 'react';
import styled from 'styled-components';

const Close = ({ closeAction }: Function) => (
  <CloseButton
    type="button"
    onClick={closeAction}
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
  z-index: 2;

  &:hover {
    color: #4cc984;
  }
`;

export default Close;
