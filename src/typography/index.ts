import styled, { css } from 'styled-components';
import { ReactComponent as CrossIcon } from 'assets/svg/crossIcon.svg';

type CrossIconProps = {
  header?: string;
};

export const LogoParams = css`
  width: 95px;
  height: 40px;
  margin-right: 15px;
`;

export const Cross = styled(CrossIcon)<CrossIconProps>`
  width: 100%;
  height: 100%;
  opacity: ${({ header }) => !header && '0.32'};
  filter: ${({ header }) => header && 'invert(1)'};

  &:hover {
    opacity: ${({ header }) => header && '1'};
  }
`;
