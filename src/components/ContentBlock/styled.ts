import { FOOTER_LINK_COLOR_HOVER } from 'constants/colors';
import styled from 'styled-components';

export const ContentBlockWrapper = styled.main`
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  min-height: calc(100vh - 175px);
  margin: 0 auto;
  padding: 31px 16px 0 116px;
`;

export const MainContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    margin: 0;
  }

  .DefaultText {
    margin-left: -100px;
    margin-top: -50px;
    font: 700 19px/26px 'Yandex Sans Display';

    span {
      color: ${FOOTER_LINK_COLOR_HOVER};
    }
  }
`;
