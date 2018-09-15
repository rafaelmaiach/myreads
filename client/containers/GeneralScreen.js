// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  image: string,
  children: React.Node,
}

/**
 * @constructor GeneralScreen
 * @param {image} image - Image file
 * @param {React.Node} children - React components
 * @description Renders the layer of images for bookshelf and search page
 */
const GeneralScreen = ({ image, children }: Props) => (
  <GeneralScreenBackground image={image}>
    <GeneralScreenBackgroundLayer>
      {children}
    </GeneralScreenBackgroundLayer>
  </GeneralScreenBackground>
);

const GeneralScreenBackground = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
`;

const GeneralScreenBackgroundLayer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
`;

export default GeneralScreen;
