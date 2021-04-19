import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  SET_IS_SEARCH_BUTTON_CLICKED,
  SET_SEARCH_REQUEST,
} from 'constants/info';
import { MainButton } from './styled';
import { selectSearchRequest } from 'constants/selectors';

export const SearchButton: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const searchRequest = useSelector(selectSearchRequest);
  const searchButtonClickHandler = () => {
    dispatch({ type: SET_IS_SEARCH_BUTTON_CLICKED, payload: true });
    if (!searchRequest) {
      dispatch({ type: SET_SEARCH_REQUEST, payload: '' });
    }
  };
  return (
    <MainButton onClick={searchButtonClickHandler}>{t('Search')}</MainButton>
  );
};
