// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  titleText: string,
  isModal?: ?boolean,
}

const Title = ({ titleText, isModal }: Props) => (
  <TitleContainer isModal={isModal}>
    {titleText}
  </TitleContainer>
);

Title.defaultProps = {
  isModal: false,
};

const TitleContainer = styled.h1`
  font-size: ${({ isModal }) => !isModal ? '14px' : '12px'};
  font-weight: bold;

  @media only screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export default onlyUpdateForKeys(['titleText'])(Title);
