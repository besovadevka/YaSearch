import styled from 'styled-components';
import { BLACK_COLOR, SEARCH_INPUT_COLOR } from 'constants/colors';

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 123px);
  max-width: 800px;
  height: 40px;
  background-color: ${SEARCH_INPUT_COLOR};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 2px;
`;

export const SearchInputLeftSide = styled.div`
  width: 13px;
  height: 40px;
  background-color: ${SEARCH_INPUT_COLOR};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='45'%3E%3Cpath fill='%23fff' d='M40 -2V45L.99 40 c1.105 0 2.405-.809 2.897-1.792L13 20 3.896 1.792C3.401.802 2.1 0 1 0z'/%3E%3C/svg%3E");
`;

export const StopSearchButton = styled.button`
  position: absolute;
  top: 6px;
  left: calc(100% - 130px);
  width: 28px;
  height: 28px;
  background-color: ${BLACK_COLOR};
  opacity: 0.2;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
