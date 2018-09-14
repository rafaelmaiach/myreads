// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  publisher?: string,
}

const Publisher = ({ publisher }: Props) => (
  <BookPublisherContainer>
    {
      publisher
        ? `Publisher: ${publisher}`
        : 'Publisher not found'
    }
  </BookPublisherContainer>
);

Publisher.defaultProps = {
  publisher: '',
};

const BookPublisherContainer = styled.span`
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

export default onlyUpdateForKeys(['publisher'])(Publisher);
