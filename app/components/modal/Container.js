// @flow
import * as React from 'react';
import styled from 'styled-components';

import ModalBox from './Box';

type Props = {
  authors: Array<string>,
  rating: number,
  closeModal: Function,
  description: string,
  thumbnail: string,
  pageCount: number,
  previewLink: string,
  publisher: string,
  publishedDate: string,
  subtitle: string,
  title: string,
}

const ModalContainer = (props: Props) => (
  <Container>
    <ModalBox {...props} />
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
