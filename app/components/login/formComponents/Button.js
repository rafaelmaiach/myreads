// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  text: string,
  formAction: Function,
}

const Button = ({ text, formAction }: Props) => (
  <ButtonContainer>
    <button className="login_button" type="button" onClick={formAction}>
      {text}
    </button>
  </ButtonContainer>
);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;

  & button {
    width: 40%;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    background-color: #05386b;
    color: #edf5e1;

    &:hover {
      background-color: #4cc984;
      color: #05386b;
      cursor: pointer;
    }
  }
`;

export default Button;
