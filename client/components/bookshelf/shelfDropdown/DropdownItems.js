// @flow
import * as React from 'react';
import styled from 'styled-components';

import { getShelfName } from 'Utils/helpers';

type Props = {
  book: Object,
  updateBook: Function,
  removeBook: Function,
  toggleShelvesList: Function,
}

/**
 * @constructor Book#DropdownItems
 * @param {object} book - Book information
 * @param {function} updateBook - Function to update the book shelf
 * @param {function} removeBook - Function to remove book from shelf
 * @param {function} toggleShelvesList - Function to open/close dropdown
 * @description Renders the dropdown items
 */
const DropdownItems = (props: Props) => {
  const {
    book,
    updateBook,
    removeBook,
    toggleShelvesList,
  } = props;

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

  // Calls the updateBook or removeBook function depending on which element triggered it
  // And close the dropdown after that
  /* istanbul ignore next */
  const callUpdateBook = (event, callback) => {
    callback(event);
    toggleShelvesList();
  };

  // Filter the shelfs user can move the book to
  /* istanbul ignore next */
  const shelfsToMove = allShelfs.filter(({ shelf }) => shelf !== book.shelf);

  // Create each dropdown item
  /* istanbul ignore next */
  const dropdownItems = shelfsToMove.map(({ key, shelf, text }) => (
    <ShelfDropdownItem
      key={key}
      type="button"
      name={shelf}
      onClick={event => callUpdateBook(event, updateBook)}
    >
      {text}
    </ShelfDropdownItem>));

  const { id, shelf } = book;

  const shelfName = getShelfName(shelf);

  return (
    <ShelfDropdownItems id={id}>
      <ShelfDropdownCurrentShelf>
        Current shelf:
        <br />
        {shelfName}
      </ShelfDropdownCurrentShelf>
      <ShelfDropdownMoveTo>
        Move to shelf:
      </ShelfDropdownMoveTo>
      {dropdownItems}
      {shelf && (
        <ShelfDropdownSection
          name="none"
          onClick={/* istanbul ignore next */ event => callUpdateBook(event, removeBook)}
        >
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
