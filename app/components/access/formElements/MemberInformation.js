// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

type Props = {
  text: string,
  actionText: string,
  toggleForm: Function,
}

const MemberInformation = ({ text, actionText, toggleForm }: Props) => (
  <MemberInformationContainer>
    {text}
    <button type="button" onClick={toggleForm}>
      {actionText}
    </button>
  </MemberInformationContainer>
);

const MemberInformationContainer = styled.div`
    font-size: 14px;
    padding-top: 5px;

  & button {
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    background: none;

    &:hover {
      color: #4cc984;
    }
  }
`;

const shouldComponentUpdate = (props, nextProps) => {
  const { text } = props;
  return text !== nextProps.text;
};

export default shouldUpdate(shouldComponentUpdate)(MemberInformation);
