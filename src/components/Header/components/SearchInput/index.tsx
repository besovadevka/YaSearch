import React, { FC } from 'react';
import { Input } from './components/Input';
import { SearchButton } from './components/SearchButton';
import { SearchInputLeftSide, SearchInputWrapper } from './styled';

export const SearchInput: FC = () => {
  return (
    <>
      <SearchInputWrapper>
        <Input />
        <SearchButton />
      </SearchInputWrapper>
      <SearchInputLeftSide />
    </>
  );
};
