import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SET_SEARCH_REQUEST } from 'constants/info';
import { selectSearchRequest } from 'constants/selectors';
import { MainInput } from './styled';

export const Input: FC = () => {
  const dispatch = useDispatch();
  const searchRequest = useSelector(selectSearchRequest);

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_SEARCH_REQUEST, payload: e.target.value.trim() });
  };

  return (
    <MainInput onInput={onChangeInputHandler} value={searchRequest ?? ''} />
  );
};
