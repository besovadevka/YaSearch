import React, { FC } from 'react';

type DefaultTextBlockProps = {
  [key: string]: string;
};

export const DefaultTextBlock: FC<DefaultTextBlockProps> = ({
  text1,
  text2,
  text3,
}) => {
  return (
    <>
      <p className="DefaultText">
        <span>{text1}</span>
        {text2}
      </p>
      <p className="DefaultText">{text3}</p>
    </>
  );
};
