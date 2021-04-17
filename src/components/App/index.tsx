import React, { FC } from 'react';
import { Header, ContentBlock } from 'components';

import { AppStyled } from './styled';

export const App: FC = () => {
  return (
    <AppStyled>
      <Header />
      <ContentBlock />
    </AppStyled>
  );
};
