// @flow
import * as React from 'react';
import styled from 'styled-components';

import Close from 'Components/common/Close';
import ModalHeader from './Header';
import ModalDescription from './Description';

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

const ModalBox = (props: Props) => {
  const { description, closeModal, ...rest } = props;

  return (
    <Box>
      <Close closeAction={closeModal} />
      <ModalHeader {...rest} />
      <ModalDescription description={description} />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 60%;
  max-height: 60%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  position: relative;
`;

export default ModalBox;
