import styled from 'styled-components';
import { ReactComponent as LogoEN } from 'assets/svg/logoEN.svg';
import { ReactComponent as LogoRU } from 'assets/svg/logoRU.svg';
import { WHITE_COLOR } from 'constants/colors';
import { LogoParams } from 'typography';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75px;
  background-color: ${WHITE_COLOR};
  padding: 15px 16px 20px;
  box-shadow: 0 1px rgba(0, 0, 0, 10%);
`;

export const HeaderContentBlock = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: 100%;
`;

export const MainLogoEN = styled(LogoEN)`
  ${LogoParams}
`;

export const MainLogoRU = styled(LogoRU)`
  ${LogoParams}
`;
