// @flow
import * as React from 'react';
import styled from 'styled-components';

import ModalHeader from './ModalHeader';
import ModalDescription from './ModalDescription';

const ModalBox = () => (
  <Box>
    <ModalHeader>

    </ModalHeader>
    <ModalDescription>

    </ModalDescription>
  </Box>
);

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  width: 55%;
  height: 70%;
  max-height: 70%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;

export default ModalBox;
