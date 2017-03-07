// React Modules
import React from "react";
import Radium from "radium";

// Application Modules
import tableStylesheet, {brand} from "./table.stylesheet.js";

const _Tfoot = ({
  columns,
  tableLength,
  limit,
  pagination,
  showIndex,
  paginateTable,
  style
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
          style={[
            {display: "inline-block",margin: 0},
            pagination === page && {background: brand.primaryColor,borderColor: brand.primaryColor, color: "#fff"}
          ]}> {page + 1}
        </button>
      );
    });
  }
  return (
    <tfoot>
      <tr>
        <td
          colSpan={showIndex ? columns.length + 1 : columns.length}
          style={[tableStylesheet.th,style]}>
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

_Tfoot.propTypes = {
  columns: React.PropTypes.array.isRequired,
  tableLength: React.PropTypes.number.isRequired,
  limit: React.PropTypes.number,
  //pagination: React.PropTypes.array
  paginateTable: React.PropTypes.func,
  showIndex: React.PropTypes.bool
}
const Tfoot = Radium(_Tfoot);
export default Tfoot;

// .wrapper {
//   width: 90%;
//   position: relative;
//   border: 1px solid #000;
//   background: #efefef;
//   overflow: hidden;
//   border-radius: 7px;
// }
//
// .container {
//   overflow-y: scroll;
//   height: 100px;
//   border-top: 21px solid transparent;
//   border-bottom: 21px solid transparent;
// }
//
// table {
//   border-spacing: 0;
//   border-collapse: collapse;
//   width: 100%;
// }
//
// thead tr th,
// tfoot tr td {
//   height: 0;
//   line-height: 0;
//   margin: 0;
//   padding-top: 0;
//   padding-bottom: 0;
//   color: transparent;
//   border: none;
//   white-space: nowrap;
// }
//
// thead tr th div,
// tfoot tr td div {
//   position: absolute;
//   color: #fff;
//   padding: 10px;
//   margin-left: 0px;
//   line-height: normal;
//   width: 100%;
//   z-index: 2;
//   text-align: left;
// }
//
// thead tr th div {
//   border-left: 1px solid #000;
//   border-bottom: 1px solid #000;
// }
//
// tfoot tr td div {
//   border-left: 1px solid #000;
//   border-top: 1px solid #000;
// }



//const delta = tableLength / (tableLength / limit);
// const generatePagination = () => {
//   var delta = tableLength / (tableLength / limit),
//   pagination = [];
//   for (var i = 0; i < tableLength; i = i+delta) {
//     pagination.push(Math.ceil(i));
//   }
//   return pagination;
// }

//Math.ceil(i/paginationIndex) === limit && paginationArray.length < 5
//console.log(Math.ceil(i/paginationIndex) === limit, Math.ceil(i/paginationIndex), paginationArray, paginationArray.length);
