import styled from 'styled-components';
import { FOOTER_COLOR, FOOTER_TEXT_COLOR, WHITE_COLOR } from 'constants/colors';

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 40px 116px 0;
  background-color: ${FOOTER_COLOR};
  background-image: linear-gradient(0deg, #484e5d 0, #343c50 100%);
`;

export const FooterContent = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 17px;
  color: ${FOOTER_TEXT_COLOR};

  a {
    color: ${WHITE_COLOR};
    text-decoration: none;
    outline: none;

    &:hover {
      color: inherit;
    }
  }
`;
