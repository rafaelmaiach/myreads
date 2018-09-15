// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.Node,
}

/**
 * @constructor Header
 * @param {React.Node} children - Components passed inside Header
 * @description Renders header
 */
const Header = ({ children }: Props) => (
  <HeaderContainer>
    {children}
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  background-color: #05386b;
  max-height: 40px;
  min-height: 40px;

  @media only screen and (min-width: 768px) {
    max-height: 90px;
    min-height: 90px;
  }
`;

export default Header;
