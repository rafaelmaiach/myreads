// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  titleText: string,
  isModal?: ?boolean,
}

/**
 * @constructor Book#Title
 * @param {string} titleText - Title text
 * @param {boolean} isModal - If the value is being rendered inside modal
 * @description Renders book title
 */
const Title = ({ titleText, isModal }: Props) => (
  <BookTitleContainer isModal={isModal}>
    {titleText}
  </BookTitleContainer>
);

Title.defaultProps = {
  isModal: false,
};

const BookTitleContainer = styled.h1`
  font-size: ${({ isModal }) /* istanbul ignore next */ => !isModal ? '14px' : '12px'};
  font-weight: bold;
  width: 89%;
  padding-right: 10px;

  @media only screen and (min-width: 768px) {
    width: 90%;
    padding: 0;
    font-size: 16px;
  }

  @media only screen and (min-width: 1025px) {
    width: 84%;
  }
`;

/* istanbul ignore next */
export default onlyUpdateForKeys(['titleText'])(Title);
