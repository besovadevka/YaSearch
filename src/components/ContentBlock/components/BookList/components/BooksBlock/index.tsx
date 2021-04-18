import React, { FC, useState } from 'react';

import { BooksBlockWrapper, BooksRoster } from './styled';
import { ResultsSearchType } from 'types';
import { BOOKS_PER_COUNT } from 'constants/info';
import { Pagination } from 'components';
import { BookItem } from './components/BookItem';

type BooksBlockProps = {
  searchResults: ResultsSearchType[];
  setCurrentBook: (book: ResultsSearchType) => void;
};

export const BooksBlock: FC<BooksBlockProps> = ({
  searchResults,
  setCurrentBook,
}) => {
  const [page, setPage] = useState(0);
  const list =
    searchResults.length > BOOKS_PER_COUNT
      ? searchResults.slice(
          page * BOOKS_PER_COUNT,
          (page + 1) * BOOKS_PER_COUNT
        )
      : searchResults;

  return (
    <BooksBlockWrapper>
      <BooksRoster>
        {list.map((bookItem: ResultsSearchType) => {
          return (
            <BookItem
              key={JSON.stringify(bookItem)}
              {...{ bookItem, setCurrentBook }}
            />
          );
        })}
      </BooksRoster>
      {searchResults.length > BOOKS_PER_COUNT && (
        <Pagination
          changePage={setPage}
          page={page}
          pageCount={Math.ceil(searchResults.length / BOOKS_PER_COUNT)}
        />
      )}
    </BooksBlockWrapper>
  );
};
