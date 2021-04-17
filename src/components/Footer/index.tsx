import React, { FC } from 'react';
import { FooterContent, FooterWrapper } from './styled';

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        © 2021{' '}
        <a
          href="https://github.com/besovadevka"
          target="_blank"
          rel="noreferrer"
        >
          besovadevka
        </a>{' '}
        for
        <a href="https://yandex.ru" target="_blank" rel="noreferrer">
          {' '}
          Yandex
        </a>{' '}
        with ♥
      </FooterContent>
    </FooterWrapper>
  );
};
