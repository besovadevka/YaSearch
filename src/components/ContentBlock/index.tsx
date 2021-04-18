import React, { FC, useEffect, useState } from 'react';
import { API_URL, DEFAULT_CONTENT_INFO, SET_IS_LOADING } from 'constants/info';
import { ContentBlockWrapper, DefaultMainContentWrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectSearchRequest } from 'constants/selectors';
import { Loader, TextInfo } from 'components';
import { useDelayRequest } from './useDelayRequest';
import { processingData } from './processingData';
import { ResultsSearchType } from 'types';
import { BookList } from './components';

export const ContentBlock: FC = () => {
  const [searchResults, setSearchResults] = useState<
    ResultsSearchType[] | [] | null
  >(null);
  const [isSearchRequestEmpty, setIsSearchRequestEmpty] = useState(false);
  const dispatch = useDispatch();
  const searchRequest = useSelector(selectSearchRequest);
  const isLoading = useSelector(selectIsLoading);

  const delayedSearchRequest = useDelayRequest(searchRequest, 1000);

  useEffect(() => {
    if (delayedSearchRequest && searchRequest) {
      dispatch({ type: SET_IS_LOADING, payload: true });

      const fullApiUrl = `${API_URL}${searchRequest?.split(' ').join('+')}`;
      fetch(fullApiUrl)
        .then((res) => res.json())
        .then((data) => processingData(data.docs))
        .then((processingData) => {
          dispatch({ type: SET_IS_LOADING, payload: false });
          setSearchResults(processingData);
        });
    }
  }, [delayedSearchRequest, searchRequest, dispatch]);

  useEffect(() => {
    if (searchRequest === '') {
      setIsSearchRequestEmpty(true);
      setSearchResults(null);
    }
  }, [searchRequest]);

  return (
    <ContentBlockWrapper>
      <DefaultMainContentWrapper>
        {isLoading ? (
          <Loader />
        ) : searchResults ? (
          <BookList {...{ searchResults }} />
        ) : isSearchRequestEmpty ? (
          <TextInfo text="Empty request" />
        ) : (
          DEFAULT_CONTENT_INFO.map((item: string) => <p key={item}>{item}</p>)
        )}
      </DefaultMainContentWrapper>
    </ContentBlockWrapper>
  );
};
