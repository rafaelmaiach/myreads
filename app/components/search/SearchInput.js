// @flow
import * as React from 'react';
import styled from 'styled-components';
import DebounceInput from 'Components/common/DebounceInput';

const SearchInput = ({ textHasChanged }: { textHasChanged: Function }) => {
  return (
    <SearchInputContainer>
      <DebounceInput
        id="searchInput"
        type="text"
        placeholder="Search by title or author"
        debounceTimeout={300}
        onChange={textHasChanged}
      />
    </SearchInputContainer>
  );
};

const SearchInputContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 50px;

  & input {
    background: none;
    border: none;
    border-bottom: 1px solid #edf5e1;
    -webkit-appearance: none;
    font-size: 26px;
    color: #edf5e1;
    width: 100%;
  }
`;

export default SearchInput;