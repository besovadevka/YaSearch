import { API_URL, fetchOptions, SET_IS_LOADING } from 'constants/info';
import { ResultsSearchType } from 'types';

export const processingData = (booksList: any) => {
  return booksList.map((bookItem: any) => {
    return {
      key: bookItem.key,
      title: bookItem.title,
      author: bookItem.author_name ? bookItem.author_name[0] : 'Unknown',
      coverId: bookItem.cover_i,
      publishData: bookItem.first_publish_year,
      publisher: bookItem.publisher ? bookItem.publisher[0] : 'Unknown',
      isbn: bookItem.isbn ? bookItem.isbn[0] : 'Unknown',
    };
  });
};

export const fetchDataBooks = (
  searchRequest: string,
  dispatch: any,
  setSearchResults: (data: ResultsSearchType[] | []) => void
) => {
  const fullApiUrl = `${API_URL}${searchRequest?.split(' ').join('+')}`;
  fetch(fullApiUrl, fetchOptions)
    .then((res) => res.json())
    .then((data) => processingData(data.docs))
    .then((processingData) => {
      dispatch({ type: SET_IS_LOADING, payload: false });
      setSearchResults(processingData);
    });
};
