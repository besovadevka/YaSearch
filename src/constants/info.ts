export const SET_SEARCH_REQUEST = 'SET_SEARCH_REQUEST';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_IS_MODAL_ACTIVE = 'SET_IS_MODAL_ACTIVE';
export const SET_IS_SEARCH_BUTTON_CLICKED = 'SET_IS_SEARCH_BUTTON_CLICKED';
export const SET_CURR_LANG = 'SET_CURR_LANG';

export const BOOKS_PER_COUNT = 10;

export const CURRENT_LANG = 'currentLanguage';
export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGES: string[] = [DEFAULT_LANGUAGE, 'ru'];

export const Languages: { [key: string]: string } = {
  en: 'English',
  ru: 'Русский',
};

export const DEFAULT_CONTENT_INFO = {
  text1: 'Ya',
  text2: 'Search - the app for searching books!',
  text3: 'Just start tapping.',
};

export const FOOTER_INFO = [
  '© 2021 ',
  ['besovadevka ', 'https://github.com/besovadevka'],
  'for',
  [' Yandex ', 'https://yandex.ru'],
  'with ♥',
];

export const MODAL_BOOK_ITEM_DATA = [
  'Author',
  'Publish data',
  'Publisher',
  'ISBN',
];

export const API_URL = 'https://openlibrary.org/search.json?title=';
export const API__COVER_URL = 'http://covers.openlibrary.org/b/id/';
export const BOOKS_API_URL = 'https://openlibrary.org/';

export const fetchOptions = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': 'https://yasearch-besovadevka.netlify.app/',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
  },
  referrerPolicy: 'no-referrer',
} as RequestInit;
