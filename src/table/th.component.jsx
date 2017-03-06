// React Modules
import React from "react";
import Radium from "radium";

// Application Modules
import tableStylesheet from "./table.stylesheet.js";
import DownArrow from "../icons/IosArrowDown.component.jsx";
import UpArrow from "../icons/IosArrowUp.component.jsx";

const _Th = ({th,name,value,colSpan,style,sort,sortTable,sortable,children}) => {

  // Sort table using index
  var transformTh = (th ? th.toString() : ""),
  sortColumn      = (sort && sort.column.toString() ? sort.column : null), // Add to string to capture 0 index
  sortDirection   = (sort && sort.direction.toString() ? 1 : null); // Set 1 to default to asc table on `sortTable`

  // Check if sorting is in dec order
  if (sort && sortColumn === value && sort.direction === -1) {
    sortDirection = 0;
  }
  // Check if sorting is in reset order
  if(sort && sortColumn === value && sort.direction === 0 ){
    sortDirection = 1
  }
  // Check if sorting is in asc order
  if(sort && sortColumn === value && sort.direction === 1 ){
    sortDirection = -1
  }

  if (sortable) {
    transformTh =
      <button
        name={name}
        value={`{"column": ${value}, "direction": ${sortDirection}}`}
        onClick={sortTable}
        style={tableStylesheet.button}>
        {transformTh}
        {sortColumn === value && sort.direction === -1?
          <DownArrow
            style={[tableStylesheet.i,{pointerEvents: "none"}]}/>
          : null}
        {sortColumn === value && sort.direction === 1?
          <UpArrow
            style={[tableStylesheet.i,{pointerEvents: "none"}]}/>
          : null}
      </button>
  }
  return <th
    colSpan={colSpan}
    style={[tableStylesheet.th,style]}>
      {transformTh}{children}
    </th>;
}

const Th = Radium(_Th);
export default Th



// <i
//   className="ion-md-arrow-dropdown"
//   style={[tableStylesheet.i,{pointerEvents: "none"}]}/>


// <i
// className="ion-md-arrow-dropup"
// style={[tableStylesheet.i,{pointerEvents: "none"}]}/>
