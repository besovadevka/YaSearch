import React, { FC } from 'react';

import { BookListWrapper } from './styled';
import { ResultsSearchType } from 'types';
import { TextInfo } from 'components';
import { BooksBlock } from './components/BooksBlock';

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
