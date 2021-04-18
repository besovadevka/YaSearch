import React, { FC } from 'react';
import { ResultsSearchType } from 'types';
import { ModalBookItemContentWrapper } from './styled';
import { CoverImage } from 'components';
import { getItemKey } from './getItemKey';
import { MODAL_BOOK_ITEM_DATA } from 'constants/info';

type ModalBookItemProps = {
  currentBook: ResultsSearchType;
};

export const ModalBookItem: FC<ModalBookItemProps> = ({ currentBook }) => {
  return (
    <>
      <CoverImage coverId={currentBook.coverId} />
      <ModalBookItemContentWrapper>
        <h3>{currentBook.title}</h3>
        {MODAL_BOOK_ITEM_DATA.map((item: string) => (
          <p key={item}>
            <span>{item}: </span>
            {currentBook[getItemKey(item) as keyof ResultsSearchType]}
          </p>
        ))}
      </ModalBookItemContentWrapper>
    </>
  );
};
