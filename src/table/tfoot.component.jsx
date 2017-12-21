// React Modules
import React from "react";
import PropTypes from "prop-types";

const Tfoot = ({ columns, tableLength, limit, limitTable, page, showIndex, paginateTable }) => {
  if (!tableLength || !limit || tableLength < limit) return null;
  const renderPageInfo = () => <span>Page {page} of {Math.ceil(tableLength / limit)} - {tableLength} Items</span>;

  const renderLimiter = () => {
    const options = [25, 50, 100];
    if (options.indexOf(limit) === -1) options.unshift(limit);

    const renderOptions = () => options.map((option, index) => <option key={index} value={option}>{option} rows</option>)
    return (
      <select name="limit" value={limit} onChange={limitTable}>
        {renderOptions()}
      </select>
    );
  }
  const renderPagination = () => {
    const paginationArray = [];
    var offset;
    for (var i = 1; i < tableLength; i = i+limit) {
      const paginationIndex = Math.ceil(i/limit);
      switch (page) {
        case 1:
          offset = 5;
          break;
        case 2:
        case Math.ceil(tableLength / limit) - 1: //4.28
        // case Math.ceil(tableLength/limit) - 2: // 3.28
          offset = 4;
          break;
        default:
          offset = 3;
      }
      if (page - offset < paginationIndex && paginationIndex < page + offset) paginationArray.push(paginationIndex);
    }
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
    <tfoot>
      <tr>
        <td
          colSpan={showIndex ? columns.length + 1 : columns.length}>
          <div style={{ display: "flex", alignItems: "center"}}>
            <span style={{flex: 1,textAlign: "left"}}>
              {renderPageInfo()}
            </span>
            <span style={{ display: "flex", flex: 1, justifyContent: "center"}}>
              {renderLimiter()}
            </span>
            <span style={{flex: 1,textAlign: "right",whiteSpace: "nowrap"}}>
              {renderPagination()}
            </span>
          </div>
        </td>
      </tr>
    </tfoot>
  )
}

Tfoot.propTypes = {
  columns: PropTypes.array.isRequired,
  tableLength: PropTypes.number.isRequired,
  limit: PropTypes.number,
  limitTable: PropTypes.func,
  page: PropTypes.number,
  showIndex: PropTypes.bool,
  paginateTable: PropTypes.func
}

export default Tfoot;
