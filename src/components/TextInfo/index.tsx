import React, { FC } from 'react';
import { TextInfoWrapper } from './styled';
import { useTranslation } from 'react-i18next';

export const TextInfo: FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation();
  return (
    <TextInfoWrapper>
      <p>{t(text)}</p>
    </TextInfoWrapper>
  );
};
