import { FOOTER_LINK_COLOR_HOVER } from 'constants/colors';
import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  @keyframes search {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: search linear 2.5s infinite;

  p {
    font: bold 24px/28px 'Yandex Sans Display';
    margin: -35px 0 0 -116px;
    span {
      color: ${FOOTER_LINK_COLOR_HOVER};
    }
  }
`;
