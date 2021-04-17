import styled from 'styled-components';

export const ContentBlockWrapper = styled.main`
  display: flex;
  height: fit-content;
  width: 100%;
  min-height: calc(100vh - 175px);
  padding: 31px 16px 0 116px;
`;

export const DefaultMainContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    margin: 0;
    margin-left: -100px;
  }
`;
