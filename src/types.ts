export type AppStateType = {
  searchRequest: string | null;
  isLoading: boolean;
  isModalActive: boolean;
  isSearchButtonClicked: boolean;
};

export type ResultsSearchType = {
  title: string;
  author: string;
  coverId: number | undefined;
  publishData: number;
  publisher: string;
  isbn: string;
};
