// @flow
import * as React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';

const BackButtonComponent = ({ history }: { history: Function }) => {
  const goBackToBookshelf = () => history.push('/bookshelf');

  return (
    <BackButtonContainer>
      <BackButton type="button" onClick={goBackToBookshelf}>
        {'<'}
      </BackButton>
    </BackButtonContainer>
  );
};

const BackButtonContainer = styled.div`
  display: flex;
  width: 7%;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.button`
  width: 100%;
  height: 100%;
  color: #edf5e1;
  font-size: 70px;
  border: none;
  background: none;
  padding: 0 0 20px 0;

  &:hover {
    color: #4cc984;
    cursor: pointer;
  }
`;

export default withRouter(BackButtonComponent);
