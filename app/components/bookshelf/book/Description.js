// @flow
import * as React from 'react';
import styled from 'styled-components';

const Description = ({ descriptionReduced }: string) => (
  <DescriptionContainer>
    {descriptionReduced}
  </DescriptionContainer>
);

const DescriptionContainer = styled.p`
  font-size: 14px;
  margin: 0;
`;

export default Description;
