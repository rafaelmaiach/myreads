// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  image: string,
  children: React.Node,
}

const GeneralScreen = ({ image, children }: Props) => (
  <Background image={image}>
    <BackgroundLayer>
      {children}
    </BackgroundLayer>
  </Background>
);

const Background = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
`;

const BackgroundLayer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
`;

export default GeneralScreen;
