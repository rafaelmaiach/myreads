// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

import DropdownItems from './DropdownItems';
type Props = {
  book: Object,
  updateBook: Function,
  removeBook: Function,
}

/**
 * @function openDropdown
 * @description Get the dropdown list and toggle a class to show the values
 * The id shelfDropdownItems is set inside the DropdownItems child component
 */
const openDropdown = (id: string) => () => {
  const dropdown = document.getElementById(id);
  if (dropdown) {
    dropdown.classList.toggle('showDropdown');
  }
};

/**
 * @constructor Book#Dropdown
 * @param {object} book - Book information
 * @param {function} updateBook - Function to update the book shelf
 * @param {function} removeBook - Function to remove book from shelf
 * @description Renders the dropdown button to book
 */
const Dropdown = ({ book, updateBook, removeBook }: Props) => {
  const openShelvesList = openDropdown(book.id);

  return (
    <ShelfDropdownContainer>
      <ShelfDropdownButton type="button" onClick={openShelvesList}>...</ShelfDropdownButton>
      <DropdownItems book={book} updateBook={updateBook} removeBook={removeBook} />
    </ShelfDropdownContainer>
  );
};

const ShelfDropdownContainer = styled.div`
  position: absolute;
  display: inline-block;
  top: 5px;
  right: 5px;
  width: 25px;
  height: 25px;
  z-index: 1;

  @media only screen and (min-width: 1025px) {
    right: 15px;
    width: 35px;
    height: 35px;
  }
`;

const ShelfDropdownButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  background-color: #05386b;
  color: #edf5e1;
  padding-bottom: 25%;
  font-size: 13px;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #4cc984;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 18px;
  }
`;

const shouldComponentUpdate = (props, nextProps) => {
  const { shelf } = props.book;
  return shelf !== nextProps.book.shelf;
};

export default shouldUpdate(shouldComponentUpdate)(Dropdown);
