import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';

import './style.css';

type PaginationProps = {
  pageCount: number;
  changePage: (page: number) => void;
  page: number;
};

export const Pagination: FC<PaginationProps> = ({
  pageCount,
  changePage,
  page,
}) => {
  const { t } = useTranslation();
  return (
    <ReactPaginate
      nextLabel={t('next')}
      previousLabel={t('Previous')}
      breakLabel={''}
      pageCount={pageCount}
      initialPage={page}
      marginPagesDisplayed={0}
      pageRangeDisplayed={4}
      containerClassName={'pagination'}
      pageClassName={'pageContainer'}
      pageLinkClassName={'pageLink'}
      activeClassName={'activePageContainer'}
      activeLinkClassName={'activePageLink'}
      onPageChange={(page) => changePage(page.selected)}
    />
  );
};
