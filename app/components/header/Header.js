// @flow
import * as React from 'react';
import styled from 'styled-components';

const Header = ({ children }: React.Node) => (
  <HeaderContainer>
    {children}
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  background-color: #05386b;
`;

export default Header;
