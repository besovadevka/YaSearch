import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ResultsSearchType } from 'types';
import { ModalBookItemContentWrapper } from './styled';
import { CoverImage } from 'components';
import { MODAL_BOOK_ITEM_DATA } from 'constants/info';
import { getItemKey } from './getItemKey';

type ModalBookItemProps = {
  currentBook: ResultsSearchType;
};

export const ModalBookItem: FC<ModalBookItemProps> = ({ currentBook }) => {
  const { t } = useTranslation();
  return (
    <>
      <CoverImage coverId={currentBook.coverId} />
      <ModalBookItemContentWrapper>
        <h3>{currentBook.title}</h3>
        {MODAL_BOOK_ITEM_DATA.map((item: string) => (
          <p key={item}>
            <span>{t(item)}: </span>
            {currentBook[getItemKey(item) as keyof ResultsSearchType]}
          </p>
        ))}
      </ModalBookItemContentWrapper>
    </>
  );
};
