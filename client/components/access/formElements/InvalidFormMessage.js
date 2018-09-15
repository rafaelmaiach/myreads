// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  type: string,
}

/**
 * @function getMessageFor
 * @param {string} type - Error type
 * @description Get the message for each error type
 */
const getMessageFor = (type: string) => {
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

/**
 * @constructor InvalidFormMessage
 * @param {string} type - Type error
 * @description Renders specific message error for invalid form
 */
const InvalidFormMessage = ({ type }: Props) => (
  <InvalidFormMessageContainer>
    <InvalidFormText>
      {getMessageFor(type)}
    </InvalidFormText>
  </InvalidFormMessageContainer>
);

const InvalidFormMessageContainer = styled.div`
  display: flex;
  height: 25px;
  margin-bottom: 10px;
  color: red;
`;

const InvalidFormText = styled.span`
  font-size: 10px;

  @media only screen and (min-width: 375px) {
    font-size: 14px;
  }
`;

export default InvalidFormMessage;
