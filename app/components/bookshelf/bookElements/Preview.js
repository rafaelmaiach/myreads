// @flow
import * as React from 'react';
import styled from 'styled-components';

const Preview = ({ link }?: string) => (
  <Button target="_blank" href={link}>
    Preview
  </Button>
);

const Button = styled.a`
  font-size: 14px;
  color: #4cc984;
  text-decoration: none;
  padding: 5px 0;
  width: 0;

  &:hover {
    color: #05386b;
  }
`;

export default Preview;
