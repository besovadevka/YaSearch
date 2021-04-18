import styled from 'styled-components';
import { WHITE_COLOR } from 'constants/colors';

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${WHITE_COLOR};
`;
