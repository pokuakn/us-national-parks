import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const {
    itemsCount,
    pageSize,
    currentPage,
    onPageChange,
    onNextPage,
    onPrevPage
  } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount <= 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <button
            type="button"
            className="page-link"
            onClick={() => onPrevPage()}
          >
            Previous
          </button>
        </li>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          className={
            currentPage === pagesCount ? "page-item disabled" : "page-item"
          }
        >
          <button className="page-link" onClick={() => onNextPage(pagesCount)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
