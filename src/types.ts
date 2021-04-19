export type AppStateType = {
  searchRequest: string | null;
  isLoading: boolean;
  isModalActive: boolean;
  isSearchButtonClicked: boolean;
  searchResults: ResultsSearchType[] | [] | null;
  currLang: string;
};

export type ResultsSearchType = {
  key: string;
  title: string;
  author: string;
  coverId: number | undefined;
  publishData: number;
  publisher: string;
  isbn: string;
};
