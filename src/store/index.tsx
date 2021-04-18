import React, { FC } from 'react';
import { applyMiddleware, createStore, Reducer } from 'redux';
import {
  SET_SEARCH_TIME,
  SET_SEARCH_REQUEST,
  SET_IS_ON_SEARCH,
  SET_IS_LOADING,
} from 'constants/info';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { AppStateType } from 'types';

type Action = { type: string; payload: any };

const appState = {
  searchRequest: '',
  isLoading: false,
};

const appReducer: Reducer<AppStateType, Action> = (
  state = appState,
  action
) => {
  switch (action.type) {
    case SET_SEARCH_REQUEST:
      return {
        ...state,
        searchRequest: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export const AppState: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
