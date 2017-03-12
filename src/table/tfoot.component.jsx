// React Modules
import React from "react";

const Tfoot = ({
  columns,
  tableLength,
  limit,
  pagination,
  showIndex,
  paginateTable
}) => {
  if (!tableLength || !limit || tableLength < limit) return null;
  const renderPageInfo = () => {
    return <span>{pagination + 1} - {Math.ceil(tableLength / limit)} of {tableLength} Items</span>
  }
  const renderPagination = () => {
    const paginationArray = [];
    var offset;
    for (var i = 0; i < tableLength; i = i+limit) {
      const paginationIndex = Math.ceil(i/limit);
      switch (pagination) {
        case 0:
        case Math.ceil(tableLength/limit) - 1:
          offset = 5;
          break;
        case 1:
        case Math.ceil(tableLength/limit) - 2:
          offset = 4;
          break;
        default:
          offset = 3;
      }
      if (pagination - offset < paginationIndex && paginationIndex < pagination + offset) {
        paginationArray.push(paginationIndex);
      }
    }

    return paginationArray.map((page) => {
      return (
        <button
          key={page}
          name="pagination"
          type="button"
          value={page}
          onClick={paginateTable}
          className={(pagination === page ? `pages activePage` : "pages")}>
          {page + 1}
        </button>
      );
    });
  }
  return (
    <tfoot>
      <tr>
        <td
          colSpan={showIndex ? columns.length + 1 : columns.length}>
          <div style={{display: "inline-block",width: "50%",textAlign: "left"}}>
            {renderPageInfo()}
          </div>
          <div style={{display: "inline-block",width: "50%",textAlign: "right",whiteSpace: "nowrap"}}>
            {renderPagination()}
          </div>
        </td>
      </tr>
    </tfoot>
  )
}

Tfoot.propTypes = {
  columns: React.PropTypes.array.isRequired,
  tableLength: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number,
  pagination: React.PropTypes.number,
  showIndex: React.PropTypes.bool,
  paginateTable: React.PropTypes.func
}

export default Tfoot;
