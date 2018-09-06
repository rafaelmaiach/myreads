// @flow
import * as React from 'react';
import styled from 'styled-components';

import Image from 'Components/bookshelf/bookElements/Image';
import Title from 'Components/bookshelf/bookElements/Title';
import Subtitle from 'Components/bookshelf/bookElements/Subtitle';
import Stars from 'Components/bookshelf/bookElements/Stars';
import Authors from 'Components/bookshelf/bookElements/Authors';

type Props = {
  authors: Array<string>,
  rating: number,
  thumbnail: string,
  pageCount: number,
  previewLink: string,
  publisher: string,
  publishedDate: string,
  subtitle: string,
  title: string,
}

const ModalHeader = (props: Props) => {
  const {
    authors,
    rating,
    thumbnail,
    pageCount,
    previewLink,
    publisher,
    publishedDate,
    subtitle,
    title,
  } = props;

  return (
    <Header>
      <Image isModal thumbnail={thumbnail} />
      <Informations>
        <Title titleText={title} />
        <Subtitle subtitleText={subtitle} />
        <Authors authorsNames={authors} />
        <Stars isModal rating={rating} />
      </Informations>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 40%;
  position: relative;
`;

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  color: #05386b;
  position: relative;
`;

export default ModalHeader;
