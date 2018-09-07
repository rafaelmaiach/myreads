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
  height: 250px;
`;

const Text = styled.p`
  line-height: 1.2;
  margin: 10px 0 0 0;
`;

export default ModalDescription;
