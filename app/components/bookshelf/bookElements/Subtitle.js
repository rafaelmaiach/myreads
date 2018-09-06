// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Subtitle = ({ subtitleText }: string) => (
  <SubtitleContainer>
    {subtitleText}
  </SubtitleContainer>
);

const SubtitleContainer = styled.div`
  font-size: 14px;
`;

export default onlyUpdateForKeys(['subtitleText'])(Subtitle);
