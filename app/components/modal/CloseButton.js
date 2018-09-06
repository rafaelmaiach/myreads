// @flow
import * as React from 'react';
import styled from 'styled-components';

const CloseButton = ({ closeModal }: Function) => (
  <Button onClick={closeModal}>X</Button>
);

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  cursor: pointer;

`;

export default CloseButton;
