import React, { FC } from 'react';
import { FOOTER_INFO } from 'constants/info';
import { FooterContent, FooterContentWrapper, FooterWrapper } from './styled';

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContentWrapper>
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
      </FooterContentWrapper>
    </FooterWrapper>
  );
};
