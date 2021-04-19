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
  padding: 15px 16px 20px;
  background-color: ${WHITE_COLOR};
  box-shadow: 0 1px rgba(0, 0, 0, 10%);

  @media (max-width: 768px) {
    height: 65px;
    padding: 14px 16px 16px;
  }

  @media (max-width: 650px) {
    height: auto;
  }
`;

export const HeaderContentBlock = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: 100%;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const MainLogoEN = styled(LogoEN)`
  ${LogoParams}
`;

export const MainLogoRU = styled(LogoRU)`
  ${LogoParams}
`;
