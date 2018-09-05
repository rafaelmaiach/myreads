import React from 'react';
import moize from 'moize';
import styled, { keyframes } from 'styled-components';

const flipBookPages = keyframes`
  0% {
    -webkit-transform: rotateY( 0deg);
    transform: rotateY( 0deg);
  }
  20% {
    background: #79c99d;;
  }
  40% {
    background: #79c99d;;
    -webkit-transform: rotateY( -180deg);
    transform: rotateY( -180deg);
  }
  100% {
    background: #79c99d;;
    -webkit-transform: rotateY( -180deg);
    transform: rotateY( -180deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Book = styled.div`
  border: 4px solid #05386b;
  width: 100px;
  height: 85px;
  perspective: 150px;
  background: #4cc984;
`;

const Page = styled.div`
  display: block;
  width: 50px;
  height: 85px;
  border: 4px solid #05386b;
  border-left: 1px solid #05386b;
  margin: 0;
  position: absolute;
  right: -4px;
  top: -4px;
  overflow: hidden;
  background: #79c99d;;
  transform-style: preserve-3d;
  -webkit-transform-origin: left center;
  transform-origin: left center;
  padding: 10px;

  & p {
    margin: 0;
  }
`;

const Page1 = styled(Page)`
  -webkit-animation: ${flipBookPages} 1.2s cubic-bezier(0, .39, 1, .68) 1.6s infinite;
  animation: ${flipBookPages} 1.2s cubic-bezier(0, .39, 1, .68) 1.6s infinite;
`;

const Page2 = styled(Page)`
  -webkit-animation: ${flipBookPages} 1.2s cubic-bezier(0, .39, 1, .68) 1.45s infinite;
  animation: ${flipBookPages} 1.2s cubic-bezier(0, .39, 1, .68) 1.45s infinite;
`;

const Page3 = styled(Page)`
  -webkit-animation: ${flipBookPages} 1.2s cubic-bezier(0, .39, 1, .68) 1.2s infinite;
  animation: ${flipBookPages} 1.2s cubic-bezier(0, .39, 1, .68) 1.2s infinite;
`;

const Loading = () => (
  <Container>
    <Book>
      <Page1>
        <p> ___ </p>
        <p> ___ </p>
        <p> ___ </p>
      </Page1>
      <Page2>
        <p> ___ </p>
        <p> ___ </p>
        <p> ___ </p>
      </Page2>
      <Page3>
        <p> ___ </p>
        <p> ___ </p>
        <p> ___ </p>
      </Page3>
    </Book>
  </Container>
);

export default moize.reactSimple(Loading);
