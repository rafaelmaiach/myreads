import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  width: 45%;
  height: 230px;
  min-height: 230px;
  max-height: 230px;
  margin: 15px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const BookImage = styled.div`
  background-image: url(${props => props.thumbnail});
  background-size: contain;
  background-repeat: no-repeat;
  width: 33%;
`;

export const BookInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  color: #05386b;
`;

export const BookTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const BookSubtitle = styled.div`
  font-size: 16px;
`;

export const BookAuthors = styled.div`
  font-size: 14px;
  padding-top: 5px;
`;
