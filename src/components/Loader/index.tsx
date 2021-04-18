import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoaderWrapper } from './styled';

export const Loader: FC = () => {
  const { t } = useTranslation();
  return (
    <LoaderWrapper>
      <p>
        <span>{t('Ya')}</span>
        {t('SearchYa')}
      </p>
    </LoaderWrapper>
  );
};
