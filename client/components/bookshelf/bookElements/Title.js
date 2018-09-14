// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  titleText: string,
  isModal?: ?boolean,
}

const Title = ({ titleText, isModal }: Props) => (
  <BookTitleContainer isModal={isModal}>
    {titleText}
  </BookTitleContainer>
);

Title.defaultProps = {
  isModal: false,
};

const BookTitleContainer = styled.h1`
  font-size: ${({ isModal }) => !isModal ? '14px' : '12px'};
  font-weight: bold;
  width: 89%;
  padding-right: 10px;

  @media only screen and (min-width: 1025px) {
    font-size: 16px;
  }
`;

export default onlyUpdateForKeys(['titleText'])(Title);