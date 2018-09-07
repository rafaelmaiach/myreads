// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Publisher = ({ publisher }?: string) => (
  <Container>
    {`Publisher: ${publisher}` || 'Publisher not found'}
  </Container>
);

const Container = styled.span`
  font-size: 14px;
  padding: 5px 0;
`;

export default onlyUpdateForKeys(['publisher'])(Publisher);
