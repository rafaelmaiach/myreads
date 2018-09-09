// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  book: Object,
  updateBook: Function,
}

const DropdownItems = ({ book, updateBook }: Props) => {
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

  return (
    <ShelfDropdownItems id={book.id}>
      {dropdownItems}
    </ShelfDropdownItems>
  );
};

const ShelfDropdownItems = styled.div`
  display: none;
  position: absolute;
  min-width: 135px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  background: white;
  right: 0;
  margin-top: 5px;
  background-color: #05386b;
  color: #edf5e1;

  &.showDropdown {
    display: block;
  }
`;

const ShelfDropdownItem = styled.button`
  background: none;
  border: none;
  display: block;
  cursor: pointer;
  font-size: 14px;
  padding: 7px;
  margin: 0;
  width: 100%;
  text-align: left;
  color: #edf5e1;

  &:hover {
    background-color: #4cc984;
  }
`;

export default DropdownItems;
