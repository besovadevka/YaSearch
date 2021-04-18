import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { WHITE_COLOR } from 'constants/colors';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 75px;
  background-color: ${WHITE_COLOR};
  padding: 15px 16px 20px;
  box-shadow: 0 1px rgba(0, 0, 0, 10%);
`;

export const MainLogo = styled(Logo)`
  width: 95px;
  height: 40px;
  margin-right: 15px;
`;
