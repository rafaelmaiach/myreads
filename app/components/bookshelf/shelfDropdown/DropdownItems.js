// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  book: Object,
  updateBook: Function,
  removeBook: Function,
}

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

  const shelfsToMove = allShelfs.filter(({ shelf }) => shelf !== book.shelf);

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
      <ShelfDropDownText>
        Move to...
      </ShelfDropDownText>
      {dropdownItems}
      {shelf && (
        <ShelfDropdownRemoveItem name="none" onClick={removeBook}>
          Remove
        </ShelfDropdownRemoveItem>)
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

  @media only screen and (min-width: 1200px) {
    min-width: 145px;
  }
`;

const ShelfDropdownItem = styled.button`
  background: none;
  border: none;
  display: block;
  cursor: pointer;
  font-size: 10px;
  padding: 7px;
  margin: 0;
  width: 100%;
  text-align: left;
  color: #edf5e1;

  &:hover {
    background-color: #4cc984;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const ShelfDropDownText = styled(ShelfDropdownItem)`
  color: #cecece;
  margin-bottom: 5px;
  cursor: default;
  font-size: 8px;

  &:hover {
    background-color: transparent;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

const ShelfDropdownRemoveItem = styled(ShelfDropdownItem)`
  margin-top: 5px;
  padding-top: 5px;
  border-top: 1px solid white;
`;

export default DropdownItems;
