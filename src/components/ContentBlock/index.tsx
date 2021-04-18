import React, { FC, useEffect } from 'react';
import { API_URL, DEFAULT_CONTENT_INFO, SET_IS_LOADING } from 'constants/info';
import { ContentBlockWrapper, DefaultMainContentWrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectSearchRequest } from 'constants/selectors';
import { Loader } from 'components';
import { useDelayRequest } from './useDelayRequest';
import { processingData } from './processingData';

export const ContentBlock: FC = () => {
  const dispatch = useDispatch();
  const searchRequest = useSelector(selectSearchRequest);
  const isLoading = useSelector(selectIsLoading);

  const delayedSearchRequest = useDelayRequest(searchRequest, 1000);

  useEffect(() => {
    if (delayedSearchRequest && searchRequest) {
      dispatch({ type: SET_IS_LOADING, payload: true });

      const fullApiUrl = `${API_URL}${searchRequest.split(' ').join('+')}`;
      fetch(fullApiUrl)
        .then((res) => res.json())
        .then((data) => processingData(data.docs))
        .then((processingData) => {
          dispatch({ type: SET_IS_LOADING, payload: false });
          console.log(processingData);
        });
    }
  }, [delayedSearchRequest, searchRequest, dispatch]);

  return (
    <ContentBlockWrapper>
      <DefaultMainContentWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          DEFAULT_CONTENT_INFO.map((item: string) => <p key={item}>{item}</p>)
        )}
      </DefaultMainContentWrapper>
    </ContentBlockWrapper>
  );
};
