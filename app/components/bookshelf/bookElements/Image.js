// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  thumbnail: string,
  isModal?: ?boolean,
}
const Image = ({ thumbnail, isModal }: Props) => (
  <ImageContainer isModal={isModal}>
    {thumbnail
      ? <ImageThumbnail thumbnail={thumbnail} />
      : <ImageNotFound>IMAGE NOT FOUND</ImageNotFound>
    }
  </ImageContainer>
);

Image.defaultProps = {
  isModal: false,
};

const ImageContainer = styled.div`
  position: relative;
  width: ${({ isModal }) => !isModal ? '150px' : '140px'};
  height: ${({ isModal }) => !isModal ? '200px' : '170px'};
  margin-right: 15px;
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
  font-size: 36px;
  background-color: #e2e2e2;
  width: 30%;
  box-shadow: 2px 2px 9px 3px rgba(0, 0, 0, 0.2);
  margin-right: 15px;
  text-align: center;
  color: #aaa;
`;

export default onlyUpdateForKeys(['thumbnail'])(Image);
