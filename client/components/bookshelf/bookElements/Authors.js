// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  authorsNames: string,
}

/**
 * @constructor Book#Authors
 * @param {string} authorsNames - Authors names
 * @description Renders Authors names
 */
const Authors = ({ authorsNames }: Props) => (
  <BookAuthorsContainer>
    {authorsNames}
  </BookAuthorsContainer>
);

const BookAuthorsContainer = styled.h4`
  font-size: 10px;
  font-weight: 600;
  padding-top: 5px;
  width: 89%;

  @media only screen and (min-width: 768px) {
    width: 90%;
    font-size: 12px;
  }

  @media only screen and (min-width: 1025px) {
    width: 84%;
  }
`;

/* istanbul ignore next */
export default onlyUpdateForKeys(['authorsNames'])(Authors);
