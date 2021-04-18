import { API__COVER_URL, BOOKS_API_URL } from 'constants/info';
import React, { FC, useState } from 'react';
import { ResultsSearchType } from 'types';
import {
  BooksBlockWrapper,
  BooksRoster,
  BookItem,
  BookInfo,
  BookItemMain,
  BookItemFooter,
} from './styled';
import noCoverImg from 'assets/images/no_cover.jpg';

type BooksBlockProps = {
  searchResults: ResultsSearchType[];
};

export const BooksBlock: FC<BooksBlockProps> = ({ searchResults }) => {
  const [page, setPage] = useState(0);
  const list =
    searchResults.length > 10
      ? searchResults.slice(page, (page + 1) * 10)
      : searchResults;

  return (
    <BooksBlockWrapper>
      <BooksRoster>
        {list.map((bookItem: ResultsSearchType) => {
          return (
            <BookItem key={JSON.stringify(bookItem)}>
              <BookItemMain>
                <BookInfo>
                  <h2>{bookItem.title}</h2>
                  <h3>Author</h3>
                  <p>{bookItem.author}</p>
                </BookInfo>
                <img
                  src={
                    bookItem.coverId
                      ? `${API__COVER_URL}${bookItem.coverId}-L.jpg`
                      : noCoverImg
                  }
                  alt="Book cover"
                />
              </BookItemMain>
              <BookItemFooter>
                <a href={BOOKS_API_URL} target="_blank" rel="noreferrer">
                  Books API
                </a>
              </BookItemFooter>
            </BookItem>
          );
        })}
      </BooksRoster>
    </BooksBlockWrapper>
  );
};
