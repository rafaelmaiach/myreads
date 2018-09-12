// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

type Props = {
  shelf?: string,
}
const CurrentShelfTag = ({ shelf }: Props) => (
  shelf && (
    <CurrentShelfTagContainer>
      {shelf}
    </CurrentShelfTagContainer>)
);

CurrentShelfTag.defaultProps = {
  shelf: '',
};

const CurrentShelfTagContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 15px;
  font-size: 8px;
  position: absolute;
  z-index: 1;
  background: #4cc984;
  color: #edf5e1;
  bottom: 50px;

  @media only screen and (min-width: 375px) {
    width: 80px;
  }

  @media only screen and (min-width: 1024px) {
    height: 25px;
    font-size: 14px;
    bottom: 0;
    width: 120px;
  }
`;

export default onlyUpdateForKeys(['shelf'])(CurrentShelfTag);
