// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  rating?: number,
}

const Stars = ({ rating }: Props) => {
  if (!rating) {
    return (
      <BookStarsContainer>
        <BookStarNotFound>
          Rating not found
        </BookStarNotFound>
      </BookStarsContainer>
    );
  }

  const stars = [];

  for (let i = 1; i <= 5; i += 1) {
    if (i <= rating) {
      stars.push(
        <BookStarRated key={i}>&#9733;</BookStarRated>
      );
    } else {
      stars.push(
        <BookStarUnrated key={i}>&#9733;</BookStarUnrated>
      );
    }
  }

  return (
    <BookStarsContainer>
      {stars}
    </BookStarsContainer>
  );
};

Stars.defaultProps = {
  rating: null,
};

const BookStarsContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  height: 20px;
  align-items: center;
  font-size: 12px;
  margin: 5px 0;

  @media only screen and (min-width: 375px) {
    font-size: 14px;
    margin: 0;
  }

  @media only screen and (min-width: 1025px) {
    height: 40px;
    width: 110px;
    font-size: 16px;
    margin: 5px 0;
  }
`;

const BookStarUnrated = styled.span`
  color: grey;
`;

const BookStarRated = styled.span`
  color: #4cc984;
`;

const BookStarNotFound = styled.span`
  color: grey;
  font-size: 12px;

  @media only screen and (min-width: 1025px) {
    font-size: 14px;
  }
`;

export default onlyUpdateForKeys(['rating'])(Stars);
