import React, { FC } from 'react';
import { SET_SEARCH_REQUEST } from 'constants/info';
import { selectSearchRequest } from 'constants/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Cross } from 'typography';
import { Input } from './components/Input';
import { SearchButton } from './components/SearchButton';
import {
  SearchInputLeftSide,
  SearchInputWrapper,
  StopSearchButton,
} from './styled';

export const SearchInput: FC = () => {
  const dispatch = useDispatch();
  const searchRequest = useSelector(selectSearchRequest);
  const onClickCrossHandler = () =>
    dispatch({ type: SET_SEARCH_REQUEST, payload: null });
  return (
    <>
      <SearchInputWrapper>
        {searchRequest && (
          <StopSearchButton onClick={onClickCrossHandler}>
            <Cross header="header" />
          </StopSearchButton>
        )}
        <Input />
        <SearchButton />
      </SearchInputWrapper>
      <SearchInputLeftSide />
    </>
  );
};
