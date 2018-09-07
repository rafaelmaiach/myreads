// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Authors = ({ authorsNames }: string) => (
  <AuthorsContainer>
    {authorsNames}
  </AuthorsContainer>
);

const AuthorsContainer = styled.h4`
  font-size: 12px;
  font-weight: 600;
  padding-top: 5px;
`;

export default onlyUpdateForKeys(['authorsNames'])(Authors);
