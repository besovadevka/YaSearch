import React, { FC } from 'react';
import { Header, ContentBlock, Footer } from 'components';

import { AppStyled } from './styled';

export const App: FC = () => {
  return (
    <AppStyled>
      <Header />
      <ContentBlock />
      <Footer />
    </AppStyled>
  );
};
