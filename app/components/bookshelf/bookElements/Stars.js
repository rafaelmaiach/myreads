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
  width: 110px;
  justify-content: space-between;
  height: 40px;
  margin: 5px 0;
  align-items: center;
`;

const StarUnrated = styled.span`
  color: grey;
`;

const StarRated = styled.span`
  color: #4cc984;
`;

const StarNotFound = styled.span`
  color: grey;
  font-size: 14px;
`;

export default onlyUpdateForKeys(['rating'])(Stars);
