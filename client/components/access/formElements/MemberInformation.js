// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

type Props = {
  text: string,
  actionText: string,
  toggleForm: Function,
}

/**
 * @constructor MemberInformation
 * @param {string} text - Text to be shown before the button
 * @param {string} actionText - Button text
 * @param {function} toggleForm - Toggle form function to change between signin and signup
 * @description Renders the message below the signin / signup button. To ask user to register or login on system
 */
const MemberInformation = ({ text, actionText, toggleForm }: Props) => (
  <MemberInformationContainer>
    {text}
    <button type="button" onClick={toggleForm}>
      {actionText}
    </button>
  </MemberInformationContainer>
);

const MemberInformationContainer = styled.div`
    font-size: 10px;
    padding-top: 5px;

  & button {
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
    font-size: 10px;
    background: none;
    font-weight: bold;

    &:hover {
      color: #4cc984;
    }

    @media only screen and (min-width: 375px) {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 375px) {
      font-size: 14px;
    }
`;

/* istanbul ignore next */
const shouldComponentUpdate = (props, nextProps) => {
  const { text } = props;
  return text !== nextProps.text;
};

export default shouldUpdate(shouldComponentUpdate)(MemberInformation);
