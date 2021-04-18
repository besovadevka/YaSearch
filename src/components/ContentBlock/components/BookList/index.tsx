import React, { FC } from 'react';
import { TextInfo } from 'components';
import { ResultsSearchType } from 'types';
import { BooksBlock } from './components/BooksBlock';
import { BookListWrapper } from './styled';

type BookListProps = {
  searchResults: ResultsSearchType[] | [];
  setCurrentBook: (book: ResultsSearchType) => void;
};

export const BookList: FC<BookListProps> = ({
  searchResults,
  setCurrentBook,
}) => {
  return searchResults.length ? (
    <BookListWrapper>
      <BooksBlock {...{ searchResults, setCurrentBook }} />
    </BookListWrapper>
  ) : (
    <TextInfo text="Nothing was found for your request" />
  );
};
