// @flow
import * as React from 'react';
import styled from 'styled-components';

const Authors = ({ authorsNames }: string) => (
  <AuthorsContainer>
    {authorsNames}
  </AuthorsContainer>
);

const AuthorsContainer = styled.div`
  font-size: 12px;
  font-weight: 600;
  padding-top: 5px;
`;

export default Authors;
