import React, { FC, useState } from 'react';
import {
  API__COVER_URL,
  BOOKS_API_URL,
  SET_IS_MODAL_ACTIVE,
} from 'constants/info';
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
import { Pagination } from 'components';
import { useDispatch } from 'react-redux';

type BooksBlockProps = {
  searchResults: ResultsSearchType[];
  setCurrentBook: (book: ResultsSearchType) => void;
};

export const BooksBlock: FC<BooksBlockProps> = ({
  searchResults,
  setCurrentBook,
}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const list =
    searchResults.length > 10
      ? searchResults.slice(page * 10, (page + 1) * 10)
      : searchResults;

  const onBookItemClickHandler = (bookItem: ResultsSearchType) => {
    setCurrentBook(bookItem);
    dispatch({ type: SET_IS_MODAL_ACTIVE, payload: true });
  };

  return (
    <BooksBlockWrapper>
      <BooksRoster>
        {list.map((bookItem: ResultsSearchType) => {
          return (
            <BookItem
              key={JSON.stringify(bookItem)}
              onClick={() => onBookItemClickHandler(bookItem)}
            >
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
