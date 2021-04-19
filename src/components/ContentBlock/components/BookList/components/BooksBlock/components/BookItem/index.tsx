import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ResultsSearchType } from 'types';
import { BOOKS_API_URL, SET_IS_MODAL_ACTIVE } from 'constants/info';
import {
  BookInfo,
  BookItemMain,
  BookItemFooter,
  BookItemWrapper,
} from './styled';
import { CoverImage } from 'components/CoverImage';

type BookItemProps = {
  bookItem: ResultsSearchType;
  setCurrentBook: (book: ResultsSearchType) => void;
};

export const BookItem: FC<BookItemProps> = ({ bookItem, setCurrentBook }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onBookItemClickHandler = (bookItem: ResultsSearchType) => {
    setCurrentBook(bookItem);
    dispatch({ type: SET_IS_MODAL_ACTIVE, payload: true });
  };

  const onLinkHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <BookItemWrapper onClick={() => onBookItemClickHandler(bookItem)}>
      <BookItemMain>
        <BookInfo>
          <h2>{bookItem.title}</h2>
          <h3>{t('Author')}</h3>
          <p>{bookItem.author}</p>
        </BookInfo>
        <CoverImage coverId={bookItem.coverId} />
      </BookItemMain>
      <BookItemFooter>
        <a
          href={BOOKS_API_URL}
          target="_blank"
          rel="noreferrer"
          onClick={onLinkHandler}
        >
          Books API
        </a>
      </BookItemFooter>
    </BookItemWrapper>
  );
};
