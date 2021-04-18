import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Header, ContentBlock, Footer } from 'components';
import { AppStyled } from './styled';
import { setLanguageEverywhere } from 'constants/appMiddleware';
import { CURRENT_LANG, DEFAULT_LANGUAGE } from 'constants/info';

export const App: FC = () => {
  const dispatch = useDispatch();
  dispatch(
    setLanguageEverywhere(
      localStorage.getItem(CURRENT_LANG) ?? DEFAULT_LANGUAGE
    )
  );
  return (
    <AppStyled>
      <Header />
      <ContentBlock />
      <Footer />
    </AppStyled>
  );
};
