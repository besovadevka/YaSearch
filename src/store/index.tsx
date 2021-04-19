import React, { FC } from 'react';
import { applyMiddleware, createStore, Reducer } from 'redux';
import {
  SET_SEARCH_REQUEST,
  SET_IS_LOADING,
  SET_IS_MODAL_ACTIVE,
  SET_IS_SEARCH_BUTTON_CLICKED,
  DEFAULT_LANGUAGE,
  SET_CURR_LANG,
  SET_SEARCH_RESULTS,
} from 'constants/info';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { AppStateType } from 'types';

type Action = { type: string; payload: any };

const appState = {
  searchRequest: null,
  isLoading: false,
  isModalActive: false,
  isSearchButtonClicked: false,
  searchResults: null,
  currLang: DEFAULT_LANGUAGE,
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
    case SET_IS_MODAL_ACTIVE:
      return {
        ...state,
        isModalActive: action.payload,
      };
    case SET_IS_SEARCH_BUTTON_CLICKED:
      return {
        ...state,
        isSearchButtonClicked: action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_CURR_LANG:
      return {
        ...state,
        currLang: action.payload,
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
