import styled from 'styled-components';
import { FOOTER_COLOR, FOOTER_TEXT_COLOR, WHITE_COLOR } from 'constants/colors';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${FOOTER_COLOR};
  background-image: linear-gradient(0deg, #484e5d 0, #343c50 100%);
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding: 40px 116px 0;

  p,
  button {
    margin: 0;
    font-size: 13px;
    line-height: 17px;
    color: ${FOOTER_TEXT_COLOR};
  }
`;

export const FooterContent = styled.p`
  a {
    color: ${WHITE_COLOR};
    text-decoration: none;
    outline: none;

    &:hover {
      color: inherit;
    }
  }
`;

export const FooterLangButton = styled.button`
  height: fit-content;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${WHITE_COLOR};
  }
`;
