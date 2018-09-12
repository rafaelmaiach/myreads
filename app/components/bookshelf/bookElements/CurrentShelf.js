// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  shelf?: string,
}
const CurrentShelf = ({ shelf }: Props) => {
  console.log(shelf);
  return (
    <div>oi</div>
  );
};

CurrentShelf.defaultProps = {
  shelf: '',
};

export default CurrentShelf;
