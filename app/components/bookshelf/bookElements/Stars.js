// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  rating?: number,
  isModal?: ?boolean,
}

const Stars = ({ rating, isModal }: Props) => {
  if (!rating) {
    return (
      <StarsContainer isModal={isModal}>
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
    <StarsContainer isModal={isModal}>
      {stars}
    </StarsContainer>
  );
};

Stars.defaultProps = {
  rating: null,
  isModal: false,
};

const StarsContainer = styled.div`
  display: flex;
  width: ${({ isModal }) => !isModal ? '30%' : '18%'};
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

export default Stars;
