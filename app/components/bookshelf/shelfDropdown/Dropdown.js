// @flow
import * as React from 'react';
import styled from 'styled-components';

import DropdownItems from './DropdownItems';
type Props = {
  book: Object,
  updateBook: Function,
}

// Get the dropdown list and toggle a class to show the values
// The id shelfDropdownItems is set inside the DropdownItems child component
const openDropdown = (id: string) => () => {
  document.getElementById(id).classList.toggle('showDropdown');
};

const Dropdown = ({ book, updateBook }: Props) => {
  const openShelvesList = openDropdown(book.id);

  return (
    <ShelfDropdownContainer>
      <ShelfDropdownButton type="button" onClick={openShelvesList}>...</ShelfDropdownButton>
      <DropdownItems book={book} updateBook={updateBook} />
    </ShelfDropdownContainer>
  );
};

const ShelfDropdownContainer = styled.div`
  position: absolute;
  display: inline-block;
  top: 5px;
  right: 15px;
  width: 35px;
  height: 35px;
`;

const ShelfDropdownButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  background-color: #05386b;
  color: #edf5e1;
  padding-bottom: 25%;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export default Dropdown;
