// React Modules
import React from "react";
import PropTypes from "prop-types";

const Tfoot = ({ columns, tableLength, pageSize, pageSizeOptions, setPageSize, page, pages, paginateTable, dynamicFooter }) => {
  if (dynamicFooter && tableLength < pageSize) return null;
  const renderPageInfo = () => <span>Page {page} of {pages} - {tableLength} Items</span>;

  const renderPageSize = () => {
    if (pageSizeOptions.indexOf(pageSize) === -1) pageSizeOptions.unshift(pageSize);

    const renderOptions = () => pageSizeOptions.map((option, index) => <option key={index} value={option}>{option} rows</option>)
    return (
      <select name="pageSize" value={pageSize} onChange={setPageSize}>
        {renderOptions()}
      </select>
    );
  }
  const renderPagination = () => {
    const paginationArray = [];
    var offset;
    Array(pages).fill(null).map((currentPage, index) => {
      currentPage = index + 1
      switch (page) {
        case 1:
          offset = 5;
          break;
        case 2:
        case pages - 1: //4.28
          offset = 4;
          break;
        default:
          offset = 3;
      }
      if (page - offset < currentPage && currentPage < page + offset) paginationArray.push(currentPage);
    })
    return paginationArray.map((currentPage) => {
      return (
        <button
          key={currentPage}
          name="page"
          type="button"
          value={currentPage}
          onClick={paginateTable}
          className={(page === currentPage ? `pages activePage` : "pages")}>
          {currentPage}
        </button>
      );
    });
  }
  return (
    <main className="tc-tfoot">
      <span style={{flex: 1,textAlign: "left"}}>
        {renderPageInfo()}
      </span>
      <span style={{ display: "flex", flex: 1, justifyContent: "center"}}>
        {renderPageSize()}
      </span>
      <span style={{flex: 1,textAlign: "right",whiteSpace: "nowrap"}}>
        {renderPagination()}
      </span>
    </main>
  )
}

Tfoot.propTypes = {
  columns: PropTypes.array.isRequired,
  tableLength: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  page: PropTypes.number,
  pages: PropTypes.number,
  pageSizeOptions: PropTypes.array,
  paginateTable: PropTypes.func
}

export default Tfoot;
