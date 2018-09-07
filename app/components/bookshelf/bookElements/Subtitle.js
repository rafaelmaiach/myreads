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
  font-size: 14px;
  font-weight: normal;
`;

export default onlyUpdateForKeys(['subtitleText'])(Subtitle);
