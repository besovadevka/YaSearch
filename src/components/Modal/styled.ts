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
`;

export const ModalWindow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  img {
    width: 185px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.05);
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
  cursor: pointer;
  border: none;
  outline: none;
`;
