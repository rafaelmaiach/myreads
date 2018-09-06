// @flow
import * as React from 'react';
import styled from 'styled-components';
import moize from 'moize';
import { compose, withState, withHandlers } from 'recompose';

import ModalContainer from 'Components/modal/Container';

import Image from './bookElements/Image';
import Title from './bookElements/Title';
import Subtitle from './bookElements/Subtitle';
import Stars from './bookElements/Stars';
import Authors from './bookElements/Authors';
import Description from './bookElements/Description';
import SeeMoreContainer from './bookElements/SeeMoreContainer';

type ImageLinks = {
  smallThumbnail: string,
  thumbnail: string,
}

type Props = {
  authors: Array<string>,
  averageRating: number,
  closeModal: Function,
  description: string,
  imageLinks: ImageLinks,
  isModalOpen: boolean,
  openModal: Function,
  pageCount: number,
  previewLink: string,
  publisher: string,
  publishedDate: string,
  shelf: string,
  subtitle: string,
  title: string,
}

const BookshelfBook = (props: Props) => {
  const {
    authors,
    averageRating,
    closeModal,
    description,
    imageLinks,
    isModalOpen,
    openModal,
    pageCount,
    previewLink,
    publisher,
    publishedDate,
    shelf,
    subtitle,
    title,
  } = props;

  const { thumbnail } = imageLinks;

  const authorsNames = authors.length ? `by: ${authors.join(' and ')}` : 'Author not found';
  const descriptionReduced = `${description.split(' ').slice(0, 35).join(' ')}...`;

  return (
    <BookContainer>
      {
        isModalOpen && (
          <ModalContainer
            authors={authorsNames}
            rating={averageRating}
            closeModal={closeModal}
            description={description}
            thumbnail={thumbnail}
            pageCount={pageCount}
            previewLink={previewLink}
            publisher={publisher}
            publishedDate={publishedDate}
            subtitle={subtitle}
            title={title}
          />
        )
      }
      <Image thumbnail={thumbnail} />
      <BookInformation>
        <Title titleText={title} />
        <Subtitle subtitleText={subtitle} />
        <Authors authorsNames={authorsNames} />
        <Stars rating={averageRating} />
        <Description descriptionReduced={descriptionReduced} />
        <SeeMoreContainer openModal={openModal} />
      </BookInformation>
    </BookContainer>
  );
};

const BookContainer = styled.div`
  display: flex;
  width: 45%;
  height: 250px;
  min-height: 250px;
  max-height: 250px;
  margin: 15px 15px 0 15px;
  padding: 15px 20px 15px 15px;
  background-color: rgba(255, 255, 255, 0.85);
`;

const BookInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  color: #05386b;
  position: relative;
`;

export default compose(
  withState('isModalOpen', 'toggleModal', false),
  withHandlers({
    openModal: ({ toggleModal }) => () => toggleModal(true),
    closeModal: ({ toggleModal }) => () => toggleModal(false),
  })
)(moize.reactSimple(BookshelfBook));
