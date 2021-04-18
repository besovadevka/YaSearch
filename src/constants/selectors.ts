import { AppStateType } from '../types';

export const selectSearchRequest = (state: AppStateType) => state.searchRequest;

export const selectIsLoading = (state: AppStateType) => state.isLoading;
