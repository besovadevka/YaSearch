import styled from 'styled-components';
import { OVERLAY_COLOR, WHITE_COLOR } from 'constants/colors';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  text-align: center;
  background: ${OVERLAY_COLOR};

  overscroll-behavior: contain;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 350px;
  margin: calc(50vh - 175px) auto;
  padding: 36px 16px 8px;
  text-align: center;
  background: ${WHITE_COLOR};
  border: none;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(14, 21, 47, 0.1),
    0 -2px 6px rgba(14, 21, 47, 0.06);

  @media (max-width: 768px) {
    width: 450px;
    min-height: 320px;
    margin: calc(50vh - 150px) auto;
    padding: 36px 16px 8px;
  }

  @media (max-width: 550px) {
    width: 380px;
    min-height: 380px;
    margin: calc(50vh - 180px) auto;
  }

  @media (max-width: 440px) {
    width: 280px;
    margin: calc(50vh - 220px) auto;
    padding: 36px 16px;
  }
`;

export const ModalWindow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  img {
    width: 185px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
      width: 170px;
    }

    @media (max-width: 550px) {
      width: 130px;
      height: 100%;
    }

    @media (max-width: 440px) {
      width: 85px;
      height: 100%;
    }
  }

  @media (max-width: 440px) {
    flex-direction: column;
    align-items: center;

    gap: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 440px) {
    width: 20px;
    height: 20px;
  }
`;
