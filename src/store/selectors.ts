import { AppStateType } from 'types';

export const selectSearchTime = (state: AppStateType) => state.searchTime;

export const selectSearchRequest = (state: AppStateType) => state.searchRequest;

export const selectIsOnSearch = (state: AppStateType) => state.isOnSearch;
