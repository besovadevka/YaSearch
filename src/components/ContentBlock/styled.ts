import { FOOTER_LINK_COLOR_HOVER } from 'constants/colors';
import styled from 'styled-components';
import { DefaultTextFontSize } from 'typography';

export const ContentBlockWrapper = styled.main`
  display: flex;
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  min-height: calc(100vh - 175px);
  margin: 0 auto;
  padding: 31px 16px 0 116px;

  @media (max-width: 768px) {
    min-height: calc(100vh - 155px);
    padding: 31px 16px 0 80px;
  }

  @media (max-width: 650px) {
    min-height: calc(100vh - 180px);
    padding-left: 50px;
  }

  @media (max-width: 550px) {
    padding: 0;
  }
`;

export const MainContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    margin: 0;
  }

  .DefaultText {
    ${DefaultTextFontSize};
    margin-top: -50px;
    margin-left: -116px;

    @media (max-width: 768px) {
      margin-left: -80px;
    }

    @media (max-width: 650px) {
      margin-left: -50px;
    }

    @media (max-width: 550px) {
      margin-top: -45px;
      margin-left: 0;
    }

    @media (max-width: 440px) {
      margin-top: -75px;
      padding: 40px;
      text-align: center;
    }

    span {
      color: ${FOOTER_LINK_COLOR_HOVER};
    }
  }

  @media (max-width: 550px) {
    & > div > p {
      margin: 20px;
    }
  }
`;
