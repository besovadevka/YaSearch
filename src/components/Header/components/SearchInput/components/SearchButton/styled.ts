import styled from 'styled-components';

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 100%;
  background-color: inherit;
  padding-left: 9px;
  padding-right: 0;
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
