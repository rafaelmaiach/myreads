// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

type Props = {
  text: string,
  formAction: Function,
}

/**
 * @constructor Button
 * @param {string} text - Button Text
 * @param {function} formAction - What will happen when click on button
 * @description Renders the form button
 */
const Button = ({ text, formAction }: Props) => (
  <FormButtonContainer>
    <FormButton type="button" onClick={formAction}>
      {text}
    </FormButton>
  </FormButtonContainer>
);

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 5px 0;

  @media only screen and (min-width: 768px) {
    width: 70%;
  }
`;

const FormButton = styled.button`
  width: 100%;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
  background-color: #05386b;
  color: #edf5e1;

  &:hover {
    background-color: #4cc984;
    color: #05386b;
    cursor: pointer;
  }

  @media only screen and (min-width: 375px) {
    padding: 15px;
    font-size: 16px;
  }

  @media only screen and (min-width: 768px) {
    padding: 20px;
    width: 40%;
    font-size: 20px;
  }
`;

/* istanbul ignore next */
const shouldComponentUpdate = (props, nextProps) => {
  const { text } = props;
  return text !== nextProps.text;
};

export default shouldUpdate(shouldComponentUpdate)(Button);
