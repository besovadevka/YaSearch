import React, { FC } from 'react';
import { applyMiddleware, createStore, Reducer } from 'redux';
import { SET_SEARCH_TIME } from 'constants/info';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

type AppState = {
  searchTime: number;
};

type Action = { type: string; payload: number };

const appState = {
  searchTime: 0,
};

const appReducer: Reducer<AppState, Action> = (state = appState, action) => {
  switch (action.type) {
    case SET_SEARCH_TIME:
      return {
        ...state,
        searchTime: action.payload,
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
