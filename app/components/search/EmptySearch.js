// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  dirty: boolean,
  isUpdatingBook: boolean,
}

const EmptySearch = ({ dirty, isUpdatingBook }: Props) => {
  if (isUpdatingBook) {
    return (
      <EmptySearchContainer>
        <SearchTermsContainer>
          <SearchIsUpdatingBook>
            Updating Book...
          </SearchIsUpdatingBook>
        </SearchTermsContainer>
      </EmptySearchContainer>
    );
  }

  return (
    <EmptySearchContainer>
      <SearchTermsContainer>
        {dirty && (
          <NoBooksFoundText>
            No books were found
          </NoBooksFoundText>)
        }
        <SearchTermsTitle>
          Some available search terms:
        </SearchTermsTitle>
        <SearchTerms>
          'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
        </SearchTerms>
      </SearchTermsContainer>
    </EmptySearchContainer>
  );
};

const EmptySearchContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SearchTermsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.8);
    padding: 20px 15px;
    color: #05386b;

    @media only screen and (min-width: 1024px) {
      padding: 20px 30px;
    }
`;

const SearchIsUpdatingBook = styled.span`
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 800;

  @media only screen and (min-width: 1024px) {
    width: 50%;
    font-size: 26px;
  }
`;

const NoBooksFoundText = styled.span`
  width: 100%;
  font-size: 22px;
  text-align: center;
  padding-bottom: 15px;
  font-weight: 800;
  color: #4cc984;

  @media only screen and (min-width: 1024px) {
    width: 50%;
    font-size: 26px;
  }
`;

const SearchTermsTitle = styled.span`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;

  @media only screen and (min-width: 1024px) {
    width: 50%;
    font-size: 18px;
  }
`;

const SearchTerms = styled.p`
  width: 100%;
  display: flex;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  padding: 0;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export default EmptySearch;
