import { DEFAULT_LANGUAGE } from 'constants/info';
import { selectCurrLang } from 'constants/selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SearchInput } from './components';
import {
  MainLogoEN,
  MainLogoRU,
  HeaderWrapper,
  HeaderContentBlock,
} from './styled';

export const Header: FC = () => {
  const currLang = useSelector(selectCurrLang);
  return (
    <HeaderWrapper>
      <HeaderContentBlock>
        {currLang === DEFAULT_LANGUAGE ? <MainLogoEN /> : <MainLogoRU />}
        <SearchInput />
      </HeaderContentBlock>
    </HeaderWrapper>
  );
};
