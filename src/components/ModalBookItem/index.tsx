import React, { FC } from 'react';
import { ResultsSearchType } from 'types';
import { ModalBookItemContentWrapper } from './styled';
import { CoverImage } from 'components';

type ModalBookItemProps = {
  currentBook: ResultsSearchType;
};

export const ModalBookItem: FC<ModalBookItemProps> = ({
  currentBook: { title, author, coverId, publishData, publisher, isbn },
}) => {
  return (
    <>
      <CoverImage {...{ coverId }} />
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
