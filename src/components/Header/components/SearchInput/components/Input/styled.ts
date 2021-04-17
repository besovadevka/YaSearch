import styled from 'styled-components';
import { WHITE_COLOR } from 'constants/colors';

export const MainInput = styled.input`
  display: flex;
  width: calc(100% - 88px);
  height: 100%;
  padding-left: 11px;
  background-color: ${WHITE_COLOR};
  font-size: 18px;
  border: none;
  border-radius: 3px;
  outline: none;
`;
