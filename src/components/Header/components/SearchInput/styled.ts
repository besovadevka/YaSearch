import styled from 'styled-components';
import { BLACK_COLOR, SEARCH_INPUT_COLOR } from 'constants/colors';

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: calc(100% - 123px);
  max-width: 800px;
  height: 40px;
  padding: 2px;
  background-color: ${SEARCH_INPUT_COLOR};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  @media (max-width: 768px) {
    height: 35px;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const SearchInputLeftSide = styled.div`
  width: 13px;
  height: 40px;
  margin: -2px;
  background-color: ${SEARCH_INPUT_COLOR};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='45'%3E%3Cpath fill='%23fff' d='M40 -2V45L.99 40 c1.105 0 2.405-.809 2.897-1.792L13 20 3.896 1.792C3.401.802 2.1 0 1 0z'/%3E%3C/svg%3E");

  @media (max-width: 768px) {
    margin: -4.5px;
    transform: scale(0.85);
  }

  @media (max-width: 550px) {
    margin: -4px -4px 0 0;
    transform: scale(0.86);
  }
`;

export const StopSearchButton = styled.button`
  position: absolute;
  top: 6px;
  left: calc(100% - 135px);
  width: 26px;
  height: 26px;
  padding: 3px;
  background-color: ${BLACK_COLOR};
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    left: calc(100% - 125px);
    width: 24px;
    height: 24px;
  }

  @media (max-width: 550px) {
    left: calc(100% - 120px);
    width: 22px;
    height: 22px;
  }

  @media (max-width: 440px) {
    top: 7px;
    left: calc(100% - 95px);
    width: 20px;
    height: 20px;
  }
`;
