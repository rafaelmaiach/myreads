// @flow
import * as React from 'react';
import styled from 'styled-components';

import { getShelfName } from 'Utils/helpers';

type Props = {
  shelf?: string,
}

/**
 * @constructor Book#CurrentShelfTag
 * @param {string} shelf - Shelf name
 * @description Renders current shelf tag
 */
const CurrentShelfTag = ({ shelf }: Props) => (
  shelf && (
    <CurrentShelfTagContainer>
      {getShelfName(shelf)}
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

  @media only screen and (min-width: 768px) {
    height: 25px;
    font-size: 14px;
    bottom: 0;
    width: 120px;
  }
`;

export default CurrentShelfTag;
