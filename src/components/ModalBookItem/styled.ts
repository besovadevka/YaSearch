import styled from 'styled-components';

export const ModalBookItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 190px);
  height: 100%;
  padding-left: 25px;

  gap: 7px;

  h3 {
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 440px) {
      margin-bottom: 7px;
    }
  }

  p {
    margin: 0;
    text-align: start;

    span {
      font-weight: bold;
    }
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`;
