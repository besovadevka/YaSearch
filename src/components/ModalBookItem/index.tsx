import React, { FC } from 'react';
import { ResultsSearchType } from 'types';
import noCoverImg from 'assets/images/no_cover.jpg';
import { API__COVER_URL } from 'constants/info';
import { ModalBookItemContentWrapper } from './styled';

type ModalBookItemProps = {
  currentBook: ResultsSearchType;
};

export const ModalBookItem: FC<ModalBookItemProps> = ({
  currentBook: { title, author, coverId, publishData, publisher, isbn },
}) => {
  return (
    <>
      <img
        src={coverId ? `${API__COVER_URL}${coverId}-L.jpg` : noCoverImg}
        alt="Book cover"
      />
      <ModalBookItemContentWrapper>
        <h3>{title}</h3>
        <p>
          <span>Author:</span> {author}
        </p>
        <p>
          <span>Publish data:</span> {publishData}
        </p>
        <p>
          <span>Publisher:</span> {publisher}
        </p>
        <p>
          <span>ISBN:</span> {isbn}
        </p>
      </ModalBookItemContentWrapper>
    </>
  );
};
