import { AppStateType } from '../types';

export const selectSearchRequest = (state: AppStateType) => state.searchRequest;

export const selectIsLoading = (state: AppStateType) => state.isLoading;

export const selectIsModalActive = (state: AppStateType) => state.isModalActive;

export const selectIsSearchButtonClicked = (state: AppStateType) =>
  state.isSearchButtonClicked;
