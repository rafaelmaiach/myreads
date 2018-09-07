// @flow
import * as React from 'react';
import styled from 'styled-components';

const ModalDescription = ({ description }: string) => (
  <Description>
    <Text>
      {description}
    </Text>
  </Description>
);

const Description = styled.section`
  width: 100%;
  overflow: scroll;
  height: 170px;
  font-size: 14px;

  @media only screen and (min-width: 375px) {
    height: 250px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  line-height: 1.2;
  margin: 10px 0 0 0;
`;

export default ModalDescription;
