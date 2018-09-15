// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

type Props = {
  openModal: Function,
}

/**
 * @constructor SeeMoreContainer
 * @param {function} openModal - Open modal function
 * @description See more button
 */
const SeeMoreContainer = ({ openModal }: Props) => (
  <BookSeeMoreContainer>
    <BookSeeMoreButton onClick={openModal}>
      SEE MORE
    </BookSeeMoreButton>
  </BookSeeMoreContainer>
);

const BookSeeMoreContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
  justify-content: flex-end;

  @media only screen and (min-width: 768px) {
    height: 50px;
  }
`;

const BookSeeMoreButton = styled.button`
  -webkit-appearance: none;
  border: none;
  font-size: 12px;
  background: none;
  cursor: pointer;
  color: #298954;
  font-weight: 600;

  &:hover {
    color: #4cc984;
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export default shouldUpdate(() => false)(SeeMoreContainer);
