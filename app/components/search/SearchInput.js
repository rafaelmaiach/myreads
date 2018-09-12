// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';
import DebounceInput from 'Components/common/DebounceInput';

const SearchInput = ({ textHasChanged }: { textHasChanged: Function }) => (
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

    @media only screen and (min-width: 1024px) {
      font-size: 26px;
    }

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $primary-text-color-transparent;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: $primary-text-color-transparent;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: $primary-text-color-transparent;
    }
  }


`;

export default shouldUpdate(() => false)(SearchInput);
