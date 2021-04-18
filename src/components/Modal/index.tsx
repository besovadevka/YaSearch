import { SET_IS_MODAL_ACTIVE } from 'constants/info';
import React, { FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import {
  CloseButton,
  Cross,
  ModalWindow,
  ModalWrapper,
  Overlay,
} from './styled';

type ModalProps = {
  open: boolean;
  hideOnOutsideClick?: boolean;
  children?: React.ReactNode;
};

export const Modal: FC<ModalProps> = ({
  open,
  children,
  hideOnOutsideClick = true,
}) => {
  const dispatch = useDispatch();
  const insideRef = useRef<HTMLDivElement>(null);

  const close = (e: React.MouseEvent | MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: SET_IS_MODAL_ACTIVE, payload: false });
  };

  const onOutClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const curRef = insideRef.current;
    if (hideOnOutsideClick && curRef && !curRef.contains(e.target as Node)) {
      close(e);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay onClick={onOutClick}>
      <ModalWrapper ref={insideRef}>
        <CloseButton onClick={close}>
          <Cross />
        </CloseButton>
        <ModalWindow>{children}</ModalWindow>
      </ModalWrapper>
    </Overlay>,
    document.body
  );
};
