// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  date?: string,
}

/**
 * @constructor Book#PublishedDate
 * @param {string} date - Date value
 * @description Renders book published date
 */
const PublishedDate = ({ date }: Props) => (
  <BookPublishedDateContainer>
    {
      date
        ? `Published date: ${date}`
        : 'Published date not found'
    }
  </BookPublishedDateContainer>
);

PublishedDate.defaultProps = {
  date: '',
};

const BookPublishedDateContainer = styled.span`
  font-size: 12px;

  @media only screen and (min-width: 375px) {
    font-size: 14px;
    padding: 3px 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    padding: 5px 0;
  }
`;

export default onlyUpdateForKeys(['date'])(PublishedDate);
