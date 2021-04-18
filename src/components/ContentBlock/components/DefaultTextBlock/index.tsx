import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type DefaultTextBlockProps = {
  [key: string]: string;
};

export const DefaultTextBlock: FC<DefaultTextBlockProps> = ({
  text1,
  text2,
  text3,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <p className="DefaultText">
        <span>{t(text1)}</span>
        {t(text2)}
      </p>
      <p className="DefaultText">{t(text3)}</p>
    </>
  );
};
