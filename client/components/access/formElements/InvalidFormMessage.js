// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  type: string,
}

const getMessageFor = (type) => {
  let message = '';

  switch (type) {
    case 'userExists':
      message = 'This e-mail is already registered';
      break;
    case 'invalidUser':
      message = 'Invalid e-mail or password';
      break;
    case 'invalidForm':
      message = 'Invalid form';
      break;
    default:
      break;
  }

  return message;
};

const InvalidFormMessage = ({ type }: Props) => (
  <InvalidFormMessageContainer>
    <InvalidFormText>
      {getMessageFor(type)}
    </InvalidFormText>
  </InvalidFormMessageContainer>
);

const InvalidFormMessageContainer = styled.div`
  display: flex;
  height: 20px;
  margin-bottom: 10px;
  color: red;
`;

const InvalidFormText = styled.span`
  font-size: 14px;
`;

export default InvalidFormMessage;
