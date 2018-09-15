// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  book: Object,
  updateBook: Function,
  removeBook: Function,
}

/**
 * @constructor DropdownItems
 * @param {object} book - Book information
 * @param {function} updateBook - Function to update the book shelf
 * @param {function} removeBook - Function to remove book from shelf
 * @description Renders the dropdown items
 */
const DropdownItems = ({ book, updateBook, removeBook }: Props) => {
  const allShelfs = [
    {
      key: 'dropdownCurrentlyReading',
      shelf: 'currentlyReading',
      text: 'Currently Reading',
    },
    {
      key: 'dropdownWantToRead',
      shelf: 'wantToRead',
      text: 'Want to Read',
    },
    {
      key: 'dropdownRead',
      shelf: 'read',
      text: 'Read',
    },
  ];

  // Filter the shelfs user can move the book to
  const shelfsToMove = allShelfs.filter(({ shelf }) => shelf !== book.shelf);

  // Create each dropdown item
  const dropdownItems = shelfsToMove.map(({ key, shelf, text }) => (
    <ShelfDropdownItem
      key={key}
      type="button"
      name={shelf}
      onClick={updateBook}
    >
      {text}
    </ShelfDropdownItem>));

  const { id, shelf } = book;

  return (
    <ShelfDropdownItems id={id}>
      <ShelfDropdownCurrentShelf>
        Current:
        <br />
        {shelf || 'None'}
      </ShelfDropdownCurrentShelf>
      <ShelfDropdownMoveTo>
        Move to:
      </ShelfDropdownMoveTo>
      {dropdownItems}
      {shelf && (
        <ShelfDropdownSection name="none" onClick={removeBook}>
          Remove
        </ShelfDropdownSection>)
      }
    </ShelfDropdownItems>
  );
};

const ShelfDropdownItems = styled.div`
  display: none;
  position: absolute;
  min-width: 115px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  background: white;
  right: 0;
  margin-top: 5px;
  background-color: #05386b;
  color: #edf5e1;
  padding: 5px;

  &.showDropdown {
    display: block;
  }

  @media only screen and (min-width: 1025px) {
    min-width: 145px;
  }
`;

const ShelfDropdownItem = styled.button`
  background: none;
  border: none;
  display: block;
  cursor: pointer;
  font-size: 10px;
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  color: #edf5e1;

  &:hover {
    background-color: #4cc984;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 13px;
  }
`;

const ShelfDropdownCurrentShelf = styled(ShelfDropdownItem)`
  color: #cecece;
  cursor: default;
  font-size: 8px;
  margin-bottom: 3px;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 11px;
  }
`;

const ShelfDropdownSection = styled(ShelfDropdownItem)`
  border-top: 1px solid white;
  margin-top: 5px;
  padding-top: 5px;
`;

const ShelfDropdownMoveTo = styled(ShelfDropdownSection)`
  color: #cecece;
  font-size: 11px;
  cursor: default;

  &:hover {
    background-color: transparent;
  }
`;

export default DropdownItems;
