import React, { FC } from 'react';
import { SET_SEARCH_REQUEST } from 'constants/info';
import { useDispatch } from 'react-redux';
import { MainInput } from './styled';

export const Input: FC = () => {
  const dispatch = useDispatch();

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SET_SEARCH_REQUEST, payload: e.target.value.trim() });
  };

  return <MainInput onInput={onChangeInputHandler} />;
};
