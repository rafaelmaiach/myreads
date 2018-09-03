import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  position: absolute;
  bottom: 40px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #05386b;
  color: #edf5e1;
  cursor: pointer;

  &:hover {
    color: #4cc984;
  }
`;

const BookshelfAddMore = () => (
  <Button>
    +
  </Button>
);

export default BookshelfAddMore;
