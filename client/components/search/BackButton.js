// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';
import withRouter from 'react-router-dom/withRouter';

type Props = {
  history: Function
}

/**
 * @constructor Search#BackButton
 * @param {object} history - History object
 * @description Renders the back button on search page to send back to bookshelf page
 */
const BackButtonComponent = ({ history }: Props) => {
  const goBackToBookshelf = () => history.push('/');

  return (
    <BackButtonContainer>
      <BackButton type="button" onClick={goBackToBookshelf}>
        {'<-'}
      </BackButton>
    </BackButtonContainer>
  );
};

const BackButtonContainer = styled.div`
  display: flex;
  width: 15%;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 10%;
  }
`;

const BackButton = styled.button`
  width: 100%;
  height: 100%;
  color: #edf5e1;
  font-size: 25px;
  border: none;
  background: none;
  padding-bottom: 5px;

  @media only screen and (min-width: 768px) {
    font-size: 50px;
    padding-bottom: 10px;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 70px;
    padding-bottom: 20px;
  }

  &:hover {
    color: #4cc984;
    cursor: pointer;
  }
`;

/* istanbul ignore next */
const shouldComponentUpdate = () => false;

export default shouldUpdate(shouldComponentUpdate)(withRouter(BackButtonComponent));
