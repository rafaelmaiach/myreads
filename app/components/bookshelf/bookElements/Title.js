// @flow
import * as React from 'react';
import styled from 'styled-components';

const Title = ({ titleText }: string) => (
  <TitleContainer>
    {titleText}
  </TitleContainer>
);

const TitleContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export default Title;
