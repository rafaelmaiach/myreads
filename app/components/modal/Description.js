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
  overflow-y: scroll;
`;

const Text = styled.p`
  line-height: 1.2;
`;

export default ModalDescription;
