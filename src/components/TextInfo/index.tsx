import React, { FC } from 'react';
import { TextInfoWrapper } from './styled';

export const TextInfo: FC<{ text: string }> = ({ text }) => {
  return (
    <TextInfoWrapper>
      <p>{text}</p>
    </TextInfoWrapper>
  );
};
