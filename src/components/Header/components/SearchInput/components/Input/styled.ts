import styled from 'styled-components';
import { WHITE_COLOR } from 'constants/colors';
import { BookAuthorFontSize } from 'typography';

export const MainInput = styled.input`
  ${BookAuthorFontSize};
  display: flex;
  width: calc(100% - 88px);
  height: 100%;
  padding-left: 11px;
  font-weight: normal;
  background-color: ${WHITE_COLOR};
  border: none;
  border-radius: 3px;
  outline: none;

  @media (max-width: 440px) {
    width: calc(100% - 68px);
  }
`;
