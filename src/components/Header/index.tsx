import React, { FC } from 'react';
import { SearchInput } from './components';
import { MainLogo, StyledHeader } from './styled';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <MainLogo />
      <SearchInput />
    </StyledHeader>
  );
};
