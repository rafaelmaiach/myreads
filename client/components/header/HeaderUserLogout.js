// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

import { AuthConsumer } from 'Components/control/AuthContext';

/**
 * @constructor HeaderUserLogout
 * @description Renders user name and logout button (from context api)
 */
const HeaderUserLogout = () => {
  const userInfo = localStorage.getItem('userAuthenticated');

  if (userInfo) {
    const user = JSON.parse(userInfo);

    const name = user.fullname.split(' ')[0];

    return (
      <AuthConsumer>
        {({ logout }) => (
          <UserLogoutContainer>
            <NameText>{`Hello, ${name}!`}</NameText>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </UserLogoutContainer>
        )}
      </AuthConsumer>
    );
  }

  return null;
};

const UserLogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
`;

const NameText = styled.span`
  font-size: 10px;
  padding: 0 10px;
  color: #edf5e1;

  @media only screen and (min-width: 375px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const LogoutButton = styled.button`
  -webkit-appearance: none;
  border: none;
  background: none;
  color: #edf5e1;
  cursor: pointer;
  font-size: 8px;
  padding: 0 10px;

  &:hover {
    color: #4cc984;
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

/* istanbul ignore next */
const shouldComponentUpdate = () => false;

export default shouldUpdate(shouldComponentUpdate)(HeaderUserLogout);
