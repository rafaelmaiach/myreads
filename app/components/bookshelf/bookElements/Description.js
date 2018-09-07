// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Description = ({ descriptionReduced }: string) => (
  <DescriptionContainer>
    {descriptionReduced}
  </DescriptionContainer>
);

const DescriptionContainer = styled.p`
  font-size: 10px;
  margin: 0;

  @media only screen and (min-width: 375px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export default onlyUpdateForKeys(['descriptionReduced'])(Description);
