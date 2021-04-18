import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
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
  const onPageChangeHandler = (page: number) => {
    changePage(page);
    const prevLabel = document.querySelector('.previous');
    if (page < 5) {
      prevLabel?.classList.add('disabled');
    } else {
      prevLabel?.classList.remove('disabled');
    }
  };
  return (
    <ReactPaginate
      nextLabel="next"
      previousLabel="Previous"
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
      forcePage={page}
      onPageChange={(page) => onPageChangeHandler(page.selected)}
    />
  );
};
