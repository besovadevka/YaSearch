import { CURRENT_LANG, SET_CURR_LANG } from './info';

export const setLanguageEverywhere = (currentLanguage: string) => {
  return (dispatch: (action: any) => void) => {
    localStorage.setItem(CURRENT_LANG, currentLanguage);
    dispatch({ type: SET_CURR_LANG, payload: currentLanguage });
  };
};
