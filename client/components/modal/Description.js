// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  description: string,
}

const Description = ({ description }: Props) => (
  <ModalDescriptionContainer>
    <ModalDescriptionText>
      {description}
    </ModalDescriptionText>
  </ModalDescriptionContainer>
);

const ModalDescriptionContainer = styled.section`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 200px;
  font-size: 12px;

  @media only screen and (min-width: 375px) {
    height: 280px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const ModalDescriptionText = styled.p`
  line-height: 1.2;
  margin: 5px 0 0 0;
  padding: 5px;
  max-height: 100%;
  color: #05386b;
`;

export default Description;
