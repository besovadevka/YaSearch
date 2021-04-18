import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SET_IS_SEARCH_BUTTON_CLICKED } from 'constants/info';
import { MainButton } from './styled';

export const SearchButton: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const searchButtonClickHandler = () =>
    dispatch({ type: SET_IS_SEARCH_BUTTON_CLICKED, payload: true });
  return (
    <MainButton onClick={searchButtonClickHandler}>{t('Search')}</MainButton>
  );
};
