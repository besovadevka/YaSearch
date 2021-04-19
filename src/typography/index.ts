import styled, { css } from 'styled-components';
import { ReactComponent as CrossIcon } from 'assets/svg/crossIcon.svg';

type CrossIconProps = {
  header?: string;
};

export const LogoParams = css`
  width: 95px;
  height: 40px;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 88px;
    height: 35px;
  }
  @media (max-width: 440px) {
    width: 80px;
    height: 35px;
  }
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

export const DefaultTextFontSize = css`
  font: bold 19px/26px 'Yandex Sans Display';

  @media (max-width: 992px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 25px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BookTitleFontSize = css`
  font: bold 24px/28px 'Yandex Sans Display';

  @media (max-width: 992px) {
    font-size: 23px;
    line-height: 26px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 26px;
  }
  @media (max-width: 440px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const BookAuthorFontSize = css`
  font: bold 18px/24px 'Yandex Sans Display';

  @media (max-width: 992px) {
    font-size: 17px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }
  @media (max-width: 440px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const BookAPILinkFontSize = css`
  font: normal 11px/15px 'Yandex Sans Display';

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 14px;
  }
  @media (max-width: 440px) {
    font-size: 9px;
    line-height: 12px;
  }
`;

export const FooterFontSize = css`
  font: bold 13px/17px 'Yandex Sans Display';

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 440px) {
    font-size: 11px;
    line-height: 15px;
  }
`;

export const TextBlockFontSize = css`
  font: normal 16px/20px 'Yandex Sans Display';

  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 440px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
