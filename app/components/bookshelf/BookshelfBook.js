// @flow
import * as React from 'react';
import styled from 'styled-components';
import moize from 'moize';
import { compose, withState, withHandlers } from 'recompose';

import ModalContainer from 'Components/modal/Container';

import ShelfDropdown from './shelfDropdown/Dropdown';
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

type BookProps = {
  authors: Array<string>,
  averageRating: number,
  closeModal: Function,
  description: string,
  imageLinks: ImageLinks,
  isModalOpen: boolean,
  openModal: Function,
  previewLink: string,
  publisher: string,
  publishedDate: string,
  shelf: string,
  subtitle: string,
  title: string,
  updateBook: Function,
}

type Props = {
  closeModal: Function,
  isModalOpen: boolean,
  openModal: Function,
  updateBook: Function,
  bookInfo: BookProps,
}

const BookshelfBook = (props: Props) => {
  const {
    bookInfo: bookInformations,
  }:BookProps = props;

  const {
    isModalOpen,
    closeModal,
    openModal,
    updateBook,
  } = props;

  const {
    authors,
    averageRating,
    description,
    imageLinks,
    previewLink,
    publisher,
    publishedDate,
    subtitle,
    title,
  } = bookInformations;

  const thumbnail = imageLinks ? imageLinks.thumbnail : null;

  let authorsNames = 'Author not found';

  if (authors && authors.length) {
    authorsNames = `by: ${authors.join(' and ')}`;
  }

  const descriptionReduced = description ? `${description.split(' ').slice(0, 25).join(' ')}...` : '';

  return (
    <BookContainer>
      <ShelfDropdown book={bookInformations} updateBook={updateBook} />
      {
        isModalOpen && (
          <ModalContainer
            authors={authorsNames}
            rating={averageRating}
            closeModal={closeModal}
            description={description}
            thumbnail={thumbnail}
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
  margin: 10px 10px 0 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  width: 95%;
  height: 180px;
  min-height: 180px;
  max-height: 180px;
  position: relative;

  @media only screen and (min-width: 375px) {
    height: 210px;
    min-height: 210px;
    max-height: 210px;
  }

  @media only screen and (min-width: 1200px) {
    width: 45%;
    height: 200px;
    min-height: 200px;
    max-height: 200px;
  }
`;

const BookInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  color: #05386b;
  position: relative;
  justify-content: space-between;
`;

export default compose(
  withState('isModalOpen', 'toggleModal', false),
  withHandlers({
    openModal: ({ toggleModal }) => () => toggleModal(true),
    closeModal: ({ toggleModal }) => () => toggleModal(false),
  })
)(moize.reactSimple(BookshelfBook));
