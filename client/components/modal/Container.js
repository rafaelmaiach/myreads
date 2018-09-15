// @flow
import * as React from 'react';
import styled from 'styled-components';

import Close from 'Components/common/Close';
import ModalHeader from './Header';
import ModalDescription from './Description';

type Props = {
  authors: string,
  rating: number,
  closeModal: Function,
  description: string,
  thumbnail: string,
  previewLink: string,
  publisher: string,
  publishedDate: string,
  subtitle: string,
  title: string,
}

/**
 * @constructor Modal#Container
 * @param {object} props - Book props
 * @description Renders the modal
 */
const Container = (props: Props) => {
  const { description, closeModal, ...rest } = props;

  return (
    <ModalContainer>
      <ModalBoxContainer>
        <Close closeAction={closeModal} />
        <ModalHeader {...rest} />
        <ModalDescription description={description} />
      </ModalBoxContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
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

const ModalBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 60%;
  min-height: 60%;
  max-height: 60%;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  position: relative;

  @media only screen and (min-width: 1025px) {
    width: 50%;
    height: 65%;
    min-height: 65%;
    max-height: 65%;
  }
`;

export default Container;
