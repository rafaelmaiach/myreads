// @flow
import * as React from 'react';

import {
  BookContainer,
  BookImageContainer,
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
  description: string,
  imageLinks: ImageLinks,
  shelf: string,
  subtitle: string,
  title: string,
}

const BookshelfBook = (props: Props) => {
  const {
    authors,
    averageRating,
    description,
    imageLinks,
    shelf,
    subtitle,
    title,
  } = props;

  const { thumbnail } = imageLinks;

  const authorsNames = authors.length ? `by: ${authors.join(' and ')}` : 'Author not found';
  const descriptionReduced = `${description.split(' ').slice(0, 35).join(' ')}...`;

  return (
    <BookContainer>
      <BookImageContainer>
        {thumbnail
          ? <BookImage thumbnail={thumbnail} />
          : <BookImageNotFound>IMAGE NOT FOUND</BookImageNotFound>
        }
      </BookImageContainer>

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
