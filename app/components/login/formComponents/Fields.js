// @flow
import * as React from 'react';
import styled from 'styled-components';

import SignUp from './SignUp';
import SignIn from './SignIn';

type Props = {
  isSignUpForm: boolean,
  updateFullname: Function,
  updateEmail: Function,
  updatePassword: Function,
}

const Fields = (props: Props) => {
  const {
    isSignUpForm,
    updateFullname,
    updateEmail,
    updatePassword,
  } = props;

  return (
    <FieldsContainer>
      {isSignUpForm
        ? (
          <SignUp
            updateFullname={updateFullname}
            updateEmail={updateEmail}
            updatePassword={updatePassword}
          />)
        : (
          <SignIn
            updateEmail={updateEmail}
            updatePassword={updatePassword}
          />)}
    </FieldsContainer>
  );
};

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin-bottom: 30px;
`;

export default Fields;
