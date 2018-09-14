// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  authorsNames: string,
}

const Authors = ({ authorsNames }: Props) => (
  <BookAuthorsContainer>
    {authorsNames}
  </BookAuthorsContainer>
);

const BookAuthorsContainer = styled.h4`
  font-size: 10px;
  font-weight: 600;
  padding-top: 5px;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export default onlyUpdateForKeys(['authorsNames'])(Authors);
