// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

const SeeMoreContainer = ({ openModal }: Function) => (
  <Container>
    <Button onClick={openModal}>
      See more
    </Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  justify-content: flex-end;
`;

const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  font-size: 14px;
  background: none;
  cursor: pointer;
  color: #4cc984;
  font-weight: 600;

  &:hover {
    color: #05386b;
  }
`;

export default shouldUpdate(() => false)(SeeMoreContainer);
