import React, { FC, useState } from 'react';
import { ResultsSearchType } from 'types';
import { BooksBlockWrapper, BooksRoster } from './styled';
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
    searchResults.length > 10
      ? searchResults.slice(page * 10, (page + 1) * 10)
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
      {searchResults.length > 10 && (
        <Pagination
          changePage={setPage}
          page={page}
          pageCount={Math.ceil(searchResults.length / 10)}
        />
      )}
    </BooksBlockWrapper>
  );
};
