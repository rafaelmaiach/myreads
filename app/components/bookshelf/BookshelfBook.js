// @flow
import * as React from 'react';

import {
  BookContainer,
  BookImage,
  BookInformation,
  BookTitle,
  BookSubtitle,
  BookAuthors,
} from 'Styles/components/bookshelf/_BookshelfBook';

type ImageLinks = {
  smallThumbnail: string,
  thumbnail: string,
}

type Props = {
  authors: Array<string>,
  averageRating: number,
  categories: Array<string>,
  description: string,
  imageLinks: ImageLinks,
  language: string,
  pageCount: number,
  previewLink: string,
  publishedDate: string,
  publisher: string,
  shelf: string,
  subtitle: string,
  title: string,
}

const BookshelfBook = (props: Props) => {
  const {
    authors,
    averageRating,
    categories,
    description,
    imageLinks,
    language,
    pageCount,
    previewLink,
    publishedDate,
    publisher,
    shelf,
    subtitle,
    title,
  } = props;

  const { thumbnail } = imageLinks;

  const authorsNames = authors.length ? `by: ${authors.join(', ')}` : 'Author not found';

  return (
    <BookContainer>
      <BookImage thumbnail={thumbnail} />
      <BookInformation className="bookshelf_book_information">
        <BookTitle>
          {title}
        </BookTitle>
        <BookSubtitle>
          {subtitle}
        </BookSubtitle>
        <BookAuthors>
          {authorsNames}
        </BookAuthors>
      </BookInformation>
    </BookContainer>
  );
};

export default BookshelfBook;
