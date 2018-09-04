// @flow
import * as React from 'react';

import {
  BookContainer,
  BookImage,
  BookImageNotFound,
  BookInformation,
  BookTitle,
  BookSubtitle,
  BookAuthors,
  BookDescription,
  BookSeeMoreContainer,
  BookSeeMore,
} from 'Styles/components/bookshelf/_BookshelfBook';

import BookshelfStars from 'Components/bookshelf/BookshelfStars';

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
    pageCount,
    previewLink,
    publishedDate,
    publisher,
    shelf,
    subtitle,
    title,
  } = props;

  const { thumbnail } = imageLinks;

  const authorsNames = authors.length ? `by: ${authors.join(' and ')}` : 'Author not found';
  const descriptionReduced = `${description.split(' ').slice(0, 35).join(' ')}...`;

  return (
    <BookContainer>
      {thumbnail
        ? <BookImage thumbnail={thumbnail} />
        : <BookImageNotFound>IMAGE NOT FOUND</BookImageNotFound>
      }
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
        <BookshelfStars rating={averageRating} />
        <BookDescription>
          {descriptionReduced}
        </BookDescription>
        <BookSeeMoreContainer>
          <BookSeeMore>
            See more
          </BookSeeMore>
        </BookSeeMoreContainer>
      </BookInformation>
    </BookContainer>
  );
};

export default BookshelfBook;
