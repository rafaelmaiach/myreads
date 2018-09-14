// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  descriptionReduced: string,
}

const Description = ({ descriptionReduced }: Props) => (
  <BookDescriptionContainer>
    {descriptionReduced}
  </BookDescriptionContainer>
);

const BookDescriptionContainer = styled.p`
  font-size: 10px;
  margin: 0;
  height: 45%;

  @media only screen and (min-width: 375px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export default onlyUpdateForKeys(['descriptionReduced'])(Description);
