import styled from 'styled-components';
import { WHITE_COLOR } from 'constants/colors';
import { BookAuthorFontSize } from 'typography';

export const MainInput = styled.input`
  ${BookAuthorFontSize};
  display: flex;
  width: calc(100% - 88px);
  height: 100%;
  padding-left: 11px;
  background-color: ${WHITE_COLOR};
  font-weight: normal;
  border: none;
  border-radius: 3px;
  outline: none;
`;
