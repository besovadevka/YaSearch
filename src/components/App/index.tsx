import React, { FC } from 'react';
import { Header } from 'components';

import { AppStyled } from './styled';

export const App: FC = () => {
  return (
    <AppStyled>
      <Header />
    </AppStyled>
  );
};
