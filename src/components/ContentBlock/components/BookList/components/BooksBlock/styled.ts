import styled from 'styled-components';

export const BooksBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  gap: 45px;

  @media (max-width: 550px) and (min-width: 441px) {
    margin: 0 5px;
  }

  @media (max-width: 440px) {
    gap: 25px;
  }
`;

export const BooksRoster = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  list-style: none;

  gap: 26px;
  padding-inline-start: 0;
`;
