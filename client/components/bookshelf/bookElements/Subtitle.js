// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  subtitleText: string,
}

/**
 * @constructor Book#Subtitle
 * @param {string} subtitleText - Subtitle text
 * @description Renders book subtitle
 */
const Subtitle = ({ subtitleText }: Props) => (
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
    width: 90%
    font-size: 14px;
  }

  @media only screen and (min-width: 1025px) {
    width: 84%;
  }
`;

/* istanbul ignore next */
export default onlyUpdateForKeys(['subtitleText'])(Subtitle);
