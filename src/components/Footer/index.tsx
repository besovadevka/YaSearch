import React, { FC } from 'react';
import { FOOTER_INFO, Languages } from 'constants/info';
import {
  FooterContent,
  FooterContentWrapper,
  FooterLangButton,
  FooterWrapper,
} from './styled';
import i18n from 'translation/resource';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrLang } from 'constants/selectors';
import { setLanguageEverywhere } from 'constants/appMiddleware';

export const Footer: FC = () => {
  const { t } = useTranslation();
  const currLang = useSelector(selectCurrLang);
  const dispatch = useDispatch();
  const langChangeHandler = (e: React.MouseEvent<HTMLElement>) => {
    const newLang = (Object.entries(Languages).find(
      (item: string[]) => item[1] !== (e.target as HTMLElement).textContent
    ) as string[])[0];
    dispatch(setLanguageEverywhere(newLang));
    i18n.changeLanguage(newLang);
  };
  return (
    <FooterWrapper>
      <FooterContentWrapper>
        <FooterContent>
          {FOOTER_INFO.map((item, index) =>
            index % 2 ? (
              <a href={item[1]} target="_blank" rel="noreferrer" key={item[1]}>
                {item[0]}
              </a>
            ) : (
              t(item)
            )
          )}
        </FooterContent>
        <FooterLangButton onClick={langChangeHandler}>
          {Languages[currLang]}
        </FooterLangButton>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};
