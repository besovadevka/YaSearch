import React, { FC, useEffect, useState } from 'react';
import {
  DEFAULT_CONTENT_INFO,
  SET_IS_LOADING,
  SET_IS_SEARCH_BUTTON_CLICKED,
} from 'constants/info';
import { ContentBlockWrapper, MainContentWrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectIsModalActive,
  selectIsSearchButtonClicked,
  selectSearchRequest,
} from 'constants/selectors';
import { Loader, Modal, ModalBookItem, TextInfo } from 'components';
import { useDelayRequest } from './useDelayRequest';
import { fetchDataBooks } from './helpFunctions';
import { ResultsSearchType } from 'types';
import { BookList, DefaultTextBlock } from './components';

export const ContentBlock: FC = () => {
  const [searchResults, setSearchResults] = useState<
    ResultsSearchType[] | [] | null
  >(null);
  const [currentBook, setCurrentBook] = useState<ResultsSearchType | null>(
    null
  );
  const [isSearchRequestEmpty, setIsSearchRequestEmpty] = useState(false);
  const dispatch = useDispatch();
  const searchRequest = useSelector(selectSearchRequest);
  const isLoading = useSelector(selectIsLoading);
  const isModalActive = useSelector(selectIsModalActive);
  const isSearchButtonClicked = useSelector(selectIsSearchButtonClicked);

  const delayedSearchRequest = useDelayRequest(searchRequest);

  useEffect(() => {
    if ((delayedSearchRequest || isSearchButtonClicked) && searchRequest) {
      dispatch({ type: SET_IS_LOADING, payload: true });
      dispatch({ type: SET_IS_SEARCH_BUTTON_CLICKED, payload: false });
      fetchDataBooks(searchRequest, dispatch, setSearchResults);
    }
  }, [delayedSearchRequest, isSearchButtonClicked, searchRequest, dispatch]);

  useEffect(() => {
    if (searchRequest === '') {
      setIsSearchRequestEmpty(true);
      setSearchResults(null);
    }
  }, [searchRequest]);

  return (
    <>
      <ContentBlockWrapper>
        <MainContentWrapper>
          {isLoading ? (
            <Loader />
          ) : searchResults ? (
            <BookList {...{ searchResults, setCurrentBook }} />
          ) : isSearchRequestEmpty ? (
            <TextInfo text="Empty request" />
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
