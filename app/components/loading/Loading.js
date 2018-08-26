import React from 'react';
import styled, { keyframes } from 'styled-components';

const flipBookPages = keyframes`
  0% {
    -webkit-transform: rotateY( 0deg);
    transform: rotateY( 0deg);
  }
  20% {
    background: #4b1e77;
  }
  40% {
    background: rebeccapurple;
    -webkit-transform: rotateY( -180deg);
    transform: rotateY( -180deg);
  }
  100% {
    background: rebeccapurple;
    -webkit-transform: rotateY( -180deg);
    transform: rotateY( -180deg);
  }
`;

const Book = styled.div`
  border: 4px solid #FFFFFF;
  width: 60px;
  height: 45px;
  position: relative;
  perspective: 150px;
`;

const Page = styled.div`
  display: block;
  width: 30px;
  height: 45px;
  border: 4px solid #FFFFFF;
  border-left: 1px solid #8455b2;
  margin: 0;
  position: absolute;
  right: -4px;
  top: -4px;
  overflow: hidden;
  background: #8455b2;
  transform-style: preserve-3d;
  -webkit-transform-origin: left center;
  transform-origin: left center;
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

export default () => (
  <Book>
    <Page1 />
    <Page2 />
    <Page3 />
  </Book>
);
