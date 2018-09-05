import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  background: none;
  font-size: 1.3rem;
  font-weight: 600;
  color: #edf5e1;
  cursor: pointer;

  &:hover {
    color: #4cc984;
  }
`;
