import React, { FC } from 'react';
import { SearchInput } from './components';
import { MainLogo, HeaderWrapper, HeaderContentBlock } from './styled';

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContentBlock>
        <MainLogo />
        <SearchInput />
      </HeaderContentBlock>
    </HeaderWrapper>
  );
};
