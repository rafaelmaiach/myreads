// @flow
import * as React from 'react';
import styled from 'styled-components';

import ModalBox from './ModalBox';

const ModalContainer = ({ closeModal }: Function) => (
  <Container>
    <ModalBox closeModal={closeModal} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(5, 56, 107,0.3);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export default ModalContainer;
