// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Subtitle = ({ subtitleText }: string) => (
  <BookSubtitleContainer>
    {subtitleText}
  </BookSubtitleContainer>
);

const BookSubtitleContainer = styled.h3`
  font-size: 10px;
  font-weight: normal;
  width: 89%;

  @media only screen and (min-width: 375px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export default onlyUpdateForKeys(['subtitleText'])(Subtitle);
