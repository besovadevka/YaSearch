import React, { FC } from 'react';

import { API__COVER_URL } from 'constants/info';
import noCoverImg from 'assets/images/no_cover.jpg';

export const CoverImage: FC<{ coverId: number | undefined }> = ({
  coverId,
}) => {
  return (
    <img
      src={coverId ? `${API__COVER_URL}${coverId}-L.jpg` : noCoverImg}
      alt="Book cover"
    />
  );
};
