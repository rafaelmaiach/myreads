// @flow
import * as React from 'react';
import styled from 'styled-components';

import Authors from 'Components/bookshelf/bookElements/Authors';
import Image from 'Components/bookshelf/bookElements/Image';
import Publisher from 'Components/bookshelf/bookElements/Publisher';
import PublishedDate from 'Components/bookshelf/bookElements/PublishedDate';
import Preview from 'Components/bookshelf/bookElements/Preview';
import Stars from 'Components/bookshelf/bookElements/Stars';
import Subtitle from 'Components/bookshelf/bookElements/Subtitle';
import Title from 'Components/bookshelf/bookElements/Title';

type Props = {
  authors: string,
  rating: number,
  thumbnail: string,
  previewLink: string,
  publisher: string,
  publishedDate: string,
  subtitle: string,
  title: string,
}

/**
 * @constructor Modal#Header
 * @param {object} props - Book props
 * @description Renders the modal Header
 */
const Header = (props: Props) => {
  const {
    authors,
    rating,
    thumbnail,
    previewLink,
    publisher,
    publishedDate,
    subtitle,
    title,
  } = props;

  return (
    <ModalHeaderContainer>
      <Image isModal thumbnail={thumbnail} />
      <ModalInformationsContainer>
        <Title isModal titleText={title} />
        <Subtitle isModal subtitleText={subtitle} />
        <Authors isModal authorsNames={authors} />
        <Stars isModal rating={rating} />
        <Publisher publisher={publisher} />
        <PublishedDate date={publishedDate} />
        <Preview link={previewLink} />
      </ModalInformationsContainer>
    </ModalHeaderContainer>
  );
};

const ModalHeaderContainer = styled.header`
  display: flex;
  width: 95%;
  height: 40%;
  position: relative;

  @media only screen and (min-width: 1025px) {
    width: 100%;
  }
`;

const ModalInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  color: #05386b;
  position: relative;

  @media only screen and (min-width: 1025px) {
    width: 60%;
  }
`;

export default Header;
