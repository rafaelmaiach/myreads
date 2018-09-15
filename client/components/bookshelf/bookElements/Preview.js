// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  link?: string,
}

/**
 * @constructor Preview
 * @param {string} link - Preview link
 * @description Renders Preview button
 */
const Preview = ({ link }: Props) => (
  <BookPreviewButton target="_blank" href={link}>
    Preview
  </BookPreviewButton>
);

Preview.defaultProps = {
  link: '',
};

const BookPreviewButton = styled.a`
  font-size: 12px;
  color: #4cc984;
  text-decoration: none;
  padding: 3px 0;
  width: 0;

  &:hover {
    color: #298954;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    padding: 5px 0;
  }
`;

export default Preview;
