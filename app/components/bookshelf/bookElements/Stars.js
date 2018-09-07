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
      <StarsContainer>
        <StarNotFound>
          Rating not found
        </StarNotFound>
      </StarsContainer>
    );
  }

  const stars = [];

  for (let i = 1; i <= 5; i += 1) {
    if (i <= rating) {
      stars.push(
        <StarRated key={i}>&#9733;</StarRated>
      );
    } else {
      stars.push(
        <StarUnrated key={i}>&#9733;</StarUnrated>
      );
    }
  }

  return (
    <StarsContainer>
      {stars}
    </StarsContainer>
  );
};

Stars.defaultProps = {
  rating: null,
};

const StarsContainer = styled.div`
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

  @media only screen and (min-width: 1200px) {
    height: 40px;
    width: 110px;
    font-size: 16px;
    margin: 5px 0;
  }
`;

const StarUnrated = styled.span`
  color: grey;
`;

const StarRated = styled.span`
  color: #4cc984;
`;

const StarNotFound = styled.span`
  color: grey;
  font-size: 12px;

  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export default onlyUpdateForKeys(['rating'])(Stars);
