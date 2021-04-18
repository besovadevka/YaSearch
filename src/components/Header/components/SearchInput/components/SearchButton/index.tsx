import React, { FC } from 'react';
import { MainButton } from './styled';
import { useDispatch } from 'react-redux';
import { SET_IS_SEARCH_BUTTON_CLICKED } from 'constants/info';
import { useTranslation } from 'react-i18next';

export const SearchButton: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const searchButtonClickHandler = () =>
    dispatch({ type: SET_IS_SEARCH_BUTTON_CLICKED, payload: true });
  return (
    <MainButton onClick={searchButtonClickHandler}>{t('Search')}</MainButton>
  );
};
