// @flow
import * as React from 'react';
import styled from 'styled-components';
import moize from 'moize';
import { compose, withState, withHandlers } from 'recompose';

import ModalContainer from 'Components/modal/Container';

import ShelfDropdown from './shelfDropdown/Dropdown';
import CurrentShelfTag from './bookElements/CurrentShelfTag';
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
  removeBook: Function,
  bookInfo: BookProps,
  isSearchPage: boolean,
  bookInformations: BookProps,
}

const BookshelfBook = (props: Props) => {
  const { bookInfo: bookInformations } = props;

  const {
    isModalOpen,
    closeModal,
    openModal,
    updateBook,
    removeBook,
    isSearchPage,
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
    shelf,
  } = bookInformations;

  const thumbnail = imageLinks ? imageLinks.thumbnail : '';

  let authorsNames = 'Author not found';

  if (authors && authors.length) {
    authorsNames = `by: ${authors.join(' and ')}`;
  }

  const descriptionReduced = description ? `${description.split(' ').slice(0, 25).join(' ')}...` : '';

  return (
    <BookContainer>
      <ShelfDropdown book={bookInformations} updateBook={updateBook} removeBook={removeBook} />
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
      {isSearchPage && <CurrentShelfTag shelf={shelf} />}
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
  margin: 15px 10px 0 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  width: 95%;
  height: 180px;
  min-height: 180px;
  max-height: 180px;
  position: relative;

  @media only screen and (min-width: 375px) {
    height: 215px;
    min-height: 215px;
    max-height: 215px;
  }

  @media only screen and (min-width: 1025px) {
    width: 47%;
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

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

export default compose(
  withState('isModalOpen', 'toggleModal', false),
  withHandlers({
    openModal: ({ toggleModal }) => () => toggleModal(true),
    closeModal: ({ toggleModal }) => () => toggleModal(false),
  })
)(moize.reactSimple(BookshelfBook));
