import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  width: 45%;
  height: 250px;
  min-height: 250px;
  max-height: 250px;
  margin: 15px 15px 0 15px;
  padding: 15px 20px 15px 15px;
  background-color: rgba(255, 255, 255, 0.85);
`;

export const BookImageContainer = styled.div`
  position: relative;
  width: 30%;
  margin-right: 15px;
`;

export const BookImage = styled.div`
  background-image: url(${props => props.thumbnail});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export const BookImageNotFound = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
  background-color: #e2e2e2;
  width: 30%;
  box-shadow: 2px 2px 9px 3px rgba(0, 0, 0, 0.2);
  margin-right: 15px;
  text-align: center;
  color: #aaa;
`;

export const BookInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  color: #05386b;
  position: relative;
`;

export const BookTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const BookSubtitle = styled.div`
  font-size: 14px;
`;

export const BookAuthors = styled.div`
  font-size: 12px;
  font-weight: 600;
  padding-top: 5px;
`;

export const BookDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const BookSeeMoreContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  justify-content: flex-end;
`;

export const BookSeeMore = styled.button`
  -webkit-appearance: none;
  border: none;
  font-size: 14px;
  background: none;
  cursor: pointer;
  color: #4cc984;
  font-weight: 600;

  &:hover {
    color: #05386b;
  }
`;
