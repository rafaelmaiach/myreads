// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Title = ({ titleText }: string) => (
  <TitleContainer>
    {titleText}
  </TitleContainer>
);

const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export default onlyUpdateForKeys(['titleText'])(Title);
