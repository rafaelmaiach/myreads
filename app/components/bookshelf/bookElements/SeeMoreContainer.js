// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

const SeeMoreContainer = ({ openModal }: Function) => (
  <BookSeeMoreContainer>
    <BookSeeMoreButton onClick={openModal}>
      See more
    </BookSeeMoreButton>
  </BookSeeMoreContainer>
);

const BookSeeMoreContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
  justify-content: flex-end;

  @media only screen and (min-width: 1200px) {
    height: 50px;
  }
`;

const BookSeeMoreButton = styled.button`
  -webkit-appearance: none;
  border: none;
  font-size: 12px;
  background: none;
  cursor: pointer;
  color: #4cc984;
  font-weight: 600;

  &:hover {
    color: #298954;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;

export default shouldUpdate(() => false)(SeeMoreContainer);
