import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContentBlockWrapper, MainContentWrapper } from './styled';
import { ResultsSearchType } from 'types';
import { BookList, DefaultTextBlock } from './components';
import {
  selectIsLoading,
  selectIsModalActive,
  selectIsSearchButtonClicked,
  selectSearchRequest,
  selectSearchResults,
} from 'constants/selectors';
import {
  DEFAULT_CONTENT_INFO,
  SET_IS_LOADING,
  SET_IS_SEARCH_BUTTON_CLICKED,
  SET_SEARCH_RESULTS,
} from 'constants/info';
import { Loader, Modal, ModalBookItem, TextInfo } from 'components';
import { useDelayRequest } from './useDelayRequest';
import { fetchDataBooks } from './helpFunctions';

export const ContentBlock: FC = () => {
  const [currentBook, setCurrentBook] = useState<ResultsSearchType | null>(
    null
  );
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const searchRequest = useSelector(selectSearchRequest);
  const isLoading = useSelector(selectIsLoading);
  const isModalActive = useSelector(selectIsModalActive);
  const isSearchButtonClicked = useSelector(selectIsSearchButtonClicked);

  const delayedSearchRequest = useDelayRequest(searchRequest);

  useEffect(() => {
    if (searchRequest !== null) {
      dispatch({ type: SET_IS_LOADING, payload: true });
      dispatch({ type: SET_IS_SEARCH_BUTTON_CLICKED, payload: false });
      if (searchRequest === '') {
        dispatch({ type: SET_SEARCH_RESULTS, payload: null });
        dispatch({ type: SET_IS_LOADING, payload: false });
      } else if (delayedSearchRequest) {
        fetchDataBooks(searchRequest, dispatch);
      }
    }
  }, [delayedSearchRequest, isSearchButtonClicked, searchRequest, dispatch]);

  useEffect(() => {
    if (searchRequest === null) {
      dispatch({ type: SET_SEARCH_RESULTS, payload: null });
    }
  }, [searchRequest, dispatch]);

  return (
    <>
      <ContentBlockWrapper>
        <MainContentWrapper>
          {isLoading ? (
            <Loader />
          ) : searchRequest === '' ? (
            <TextInfo text="Empty request" />
          ) : searchResults ? (
            <BookList {...{ searchResults, setCurrentBook }} />
          ) : (
            <DefaultTextBlock {...DEFAULT_CONTENT_INFO} />
          )}
        </MainContentWrapper>
      </ContentBlockWrapper>
      <Modal open={isModalActive}>
        <ModalBookItem currentBook={currentBook as ResultsSearchType} />
      </Modal>
    </>
  );
};
