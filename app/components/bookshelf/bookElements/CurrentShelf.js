// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  shelf?: string,
}
const CurrentShelf = ({ shelf }: Props) => (
  shelf && (
    <CurrentShelfContainer>
      {shelf}
    </CurrentShelfContainer>)
);

CurrentShelf.defaultProps = {
  shelf: '',
};

const CurrentShelfContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  background: #4cc984;
  color: #edf5e1;
  bottom: 0;

  @media only screen and (min-width: 1024px) {
    width: 20%;
    height: 25px;
    font-size: 14px;
  }
`;

export default CurrentShelf;
