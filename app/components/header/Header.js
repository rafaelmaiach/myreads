// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

const Header = ({ children }: React.Node) => (
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

export default shouldUpdate(() => false)(Header);
