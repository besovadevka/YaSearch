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
  }
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
    margin-left: -116px;
    margin-top: -50px;
    ${DefaultTextFontSize};

    span {
      color: ${FOOTER_LINK_COLOR_HOVER};
    }
  }
`;
