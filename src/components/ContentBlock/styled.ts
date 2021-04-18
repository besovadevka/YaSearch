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

export const DefaultMainContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    margin: 0;
  }
`;
