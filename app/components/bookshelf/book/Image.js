// @flow
import * as React from 'react';
import styled from 'styled-components';

const Image = ({ thumbnail }: string) => (
  <ImageContainer>
    {thumbnail
      ? <ImageThumbnail thumbnail={thumbnail} />
      : <ImageNotFound>IMAGE NOT FOUND</ImageNotFound>
    }
  </ImageContainer>
);

const ImageContainer = styled.div`
  position: relative;
  width: 30%;
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

export default Image;
