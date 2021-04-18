import React, { FC } from 'react';
import { ResultsSearchType } from 'types';
import { BooksBlock } from './components/BooksBlock';
import { BookListWrapper } from './styled';

type BookListProps = {
  searchResults: ResultsSearchType[] | [];
};

export const BookList: FC<BookListProps> = ({ searchResults }) => {
  return searchResults.length ? (
    <BookListWrapper>
      <BooksBlock {...{ searchResults }} />
    </BookListWrapper>
  ) : (
    <div>Nothing was found for your request</div>
  );
};
