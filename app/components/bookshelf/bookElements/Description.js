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
  font-size: 14px;
  margin: 0;
`;

export default onlyUpdateForKeys(['descriptionReduced'])(Description);
