// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

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
  width: 50%;
  margin: 5px 0;

  & button {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    background-color: #05386b;
    color: #edf5e1;

    &:hover {
      background-color: #4cc984;
      color: #05386b;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 70%;

    & button {
      padding: 20px;
      width: 40%;
      font-size: 20px;
    }
  }
`;

const shouldComponentUpdate = (props, nextProps) => {
  const { text } = props;
  return text !== nextProps.text;
};

export default shouldUpdate(shouldComponentUpdate)(Button);
