// @flow
import * as React from 'react';

import {
  HeaderContainer,
} from 'Styles/components/header/_Header';

type Props = {
  children: React.Node,
}

const Header = ({ children }: Props) => (
  <HeaderContainer>
    {children}
  </HeaderContainer>
);

export default Header;
