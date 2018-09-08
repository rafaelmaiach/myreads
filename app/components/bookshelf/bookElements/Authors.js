// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Authors = ({ authorsNames }: string) => (
  <BookAuthorsContainer>
    {authorsNames}
  </BookAuthorsContainer>
);

const BookAuthorsContainer = styled.h4`
  font-size: 10px;
  font-weight: 600;
  padding-top: 5px;

  @media only screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;

export default onlyUpdateForKeys(['authorsNames'])(Authors);
