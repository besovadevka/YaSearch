import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { TextInfoWrapper } from './styled';

export const TextInfo: FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation();
  return (
    <TextInfoWrapper>
      <p>{t(text)}</p>
    </TextInfoWrapper>
  );
};
