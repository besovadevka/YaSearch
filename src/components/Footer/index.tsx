import { FOOTER_INFO } from 'constants/info';
import React, { FC } from 'react';
import { FooterContent, FooterWrapper } from './styled';

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        {FOOTER_INFO.map((item, index) =>
          index % 2 ? (
            <a href={item[1]} target="_blank" rel="noreferrer" key={item[1]}>
              {item[0]}
            </a>
          ) : (
            item
          )
        )}
      </FooterContent>
    </FooterWrapper>
  );
};
