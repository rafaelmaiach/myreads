import styled from 'styled-components';

export const BookshelfHeader = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #05386b;
`;

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 25%;
  cursor: pointer;

  & img {
    position: absolute;
    width: 4rem;
    height: 4rem;
    left: 20px;
  }

  & span {
    position: absolute;
    font-weight: bold;
    font-size: 2.5em;
    padding-left: 7px;
    color: #edf5e1;
    left: 90px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  width: 75%;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #edf5e1;
  cursor: pointer;

  &:hover {
    color: #4cc984;
  }
`;
