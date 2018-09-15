// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';
import DebounceInput from 'Components/common/DebounceInput';

type Props = {
  textHasChanged: Function,
}

/**
 * @constructor Search#SearchInput
 * @param {function} textHasChanged - Function to handle input change
 * @description Renders the debounce input for search
 */
const SearchInput = ({ textHasChanged }: Props) => (
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

const SearchInputContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;

  & input {
    background: none;
    border: none;
    border-bottom: 1px solid #edf5e1;
    -webkit-appearance: none;
    font-size: 16px;
    color: #edf5e1;
    width: 100%;

    @media only screen and (min-width: 768px) {
      font-size: 26px;
    }

    &::placeholder,
    :-ms-input-placeholder,
    ::-ms-input-placeholder {
      color: rgba(237, 245, 225, 0.5);
      opacity: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`;

export default shouldUpdate(() => false)(SearchInput);
