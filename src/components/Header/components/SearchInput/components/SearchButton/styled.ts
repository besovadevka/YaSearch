import styled from 'styled-components';

export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 100%;
  padding-right: 0;
  padding-left: 9px;
  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 550px) {
    width: 80px;
  }

  @media (max-width: 440px) {
    width: 60px;
  }
`;
