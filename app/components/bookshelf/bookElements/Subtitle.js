// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Subtitle = ({ subtitleText }: string) => (
  <SubtitleContainer>
    {subtitleText}
  </SubtitleContainer>
);

const SubtitleContainer = styled.h3`
  font-size: 10px;
  font-weight: normal;

  @media only screen and (min-width: 375px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export default onlyUpdateForKeys(['subtitleText'])(Subtitle);