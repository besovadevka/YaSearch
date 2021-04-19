import styled from 'styled-components';
import { FOOTER_COLOR, FOOTER_TEXT_COLOR, WHITE_COLOR } from 'constants/colors';
import { FooterFontSize } from 'typography';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${FOOTER_COLOR};
  background-image: linear-gradient(0deg, #484e5d 0, #343c50 100%);

  @media (max-width: 768px) {
    height: 90px;
  }
  @media (max-width: 650px) {
    height: 80px;
  }
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
    ${FooterFontSize};
    color: ${FOOTER_TEXT_COLOR};
  }

  @media (max-width: 768px) {
    padding: 35px 60px 0 80px;
  }
  @media (max-width: 650px) {
    padding: 35px 50px 0 50px;
  }
  @media (max-width: 550px) {
    padding: 25px 30px 0 25px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
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
