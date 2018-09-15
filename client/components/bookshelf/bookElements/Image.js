// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  thumbnail: string,
  isModal?: ?boolean,
}

/**
 * @constructor Book#Image
 * @param {string} thumbnail - Book image
 * @param {boolean} isModal - If the image is inside modal
 * @description Renders book image
 */
const Image = ({ thumbnail, isModal }: Props) => (
  <BookImageContainer isModal={isModal}>
    {thumbnail
      ? <ImageThumbnail thumbnail={thumbnail} />
      : <ImageNotFound>IMAGE NOT FOUND</ImageNotFound>
    }
  </BookImageContainer>
);

Image.defaultProps = {
  isModal: false,
};

const BookImageContainer = styled.div`
  position: relative;
  width: ${({ isModal }) => !isModal ? '70px' : '60px'};
  height: ${({ isModal }) => !isModal ? '100px' : '90px'};
  margin-right: 10px;

  @media only screen and (min-width: 375px) {
    width: 80px;
    height: 110px;
  }

  @media only screen and (min-width: 768px) {
    width: 120px;
    height: 170px;
  }

  @media only screen and (min-width: 1025px) {
    width: ${({ isModal }) => !isModal ? '120px' : '140px'};
    height: 170px;
    margin-right: 15px;
  }
`;

const ImageThumbnail = styled.div`
  background-image: url(${props => props.thumbnail});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const ImageNotFound = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: #e2e2e2;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 9px 3px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #aaa;

  @media only screen and (min-width: 375px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 30px;
  }
`;

export default onlyUpdateForKeys(['thumbnail'])(Image);
