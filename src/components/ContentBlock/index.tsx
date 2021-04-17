import React, { FC } from 'react';
import { DEFAULT_CONTENT_INFO } from 'constants/info';
import { ContentBlockWrapper, DefaultMainContentWrapper } from './styled';

export const ContentBlock: FC = () => {
  return (
    <ContentBlockWrapper>
      <DefaultMainContentWrapper>
        {DEFAULT_CONTENT_INFO.map((item: string) => (
          <p key={item}>{item}</p>
        ))}
      </DefaultMainContentWrapper>
    </ContentBlockWrapper>
  );
};
