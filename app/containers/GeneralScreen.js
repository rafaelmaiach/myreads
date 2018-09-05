// @flow
import * as React from 'react';

import {
  Background,
  BackgroundLayer,
} from 'Styles/containers/_GeneralScreen';

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

export default GeneralScreen;

/**
 * type Props = {
  header: React.Node,
  bookshelfList: React.Node,
}
 * <Header />
 * <BookshelfList />
 * { header: Header, bookshelfList: BookshelfList }
 */
