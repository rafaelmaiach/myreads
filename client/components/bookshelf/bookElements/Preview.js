// @flow
import * as React from 'react';
import styled from 'styled-components';

const Preview = ({ link }?: string) => (
  <BookPreviewButton target="_blank" href={link}>
    Preview
  </BookPreviewButton>
);

const BookPreviewButton = styled.a`
  font-size: 12px;
  color: #4cc984;
  text-decoration: none;
  padding: 3px 0;
  width: 0;

  &:hover {
    color: #298954;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 14px;
    padding: 5px 0;
  }
`;

export default Preview;
