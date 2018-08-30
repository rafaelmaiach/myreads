import styled from 'styled-components';

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
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

export const MemberInformation = styled.div`
    font-size: 14px;
    padding-top: 5px;

  & button {
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      color: #4cc984;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const CloseForm = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 35px;
  padding: 10px;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  color: #05386b;

  &:hover {
    color: #4cc984;
  }

  &:focus {
    outline: none;
  }
`;
