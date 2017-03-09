// React Modules
import React from "react";
import Radium from "radium";

// Application Modules
import DownArrow from "../icons/mdArrowDropdown.component.jsx";
import UpArrow from "../icons/mdArrowDropup.component.jsx";

const _Th = ({th,name,value,colSpan,style,sort,sortTable,sortable,children}) => {

  // Sort table using index
  var transformTh = (th && th.label ? th.label.toString() : th && th.id ? th.id.toString() : ""),
  sortColumn      = (sort && sort.column.toString() ? sort.column : null), // Add to string to capture 0 index
  sortDirection   = (sort && sort.direction.toString() ? 1 : null); // Set 1 to default to asc table on `sortTable`

  // Check if sorting is in dec order
  if (sort && sortColumn === value && sort.direction === -1) sortDirection = 0;

  // Check if sorting is in reset order
  if(sort && sortColumn === value && sort.direction === 0 ) sortDirection = 1

  // Check if sorting is in asc order
  if(sort && sortColumn === value && sort.direction === 1 ) sortDirection = -1

  if (sortable) {
    transformTh =
      <button
        name={name}
        value={`{"column": ${value}, "direction": ${sortDirection}}`}
        onClick={sortTable}>
        {transformTh}
        {sortColumn === value && sort.direction === -1?
          <DownArrow className="icon" />
          : null}
        {sortColumn === value && sort.direction === 1?
          <UpArrow className="icon" />
          : null}
      </button>
  }
  return <th colSpan={colSpan}>{transformTh}{children}</th>;
}

const Th = Radium(_Th);
export default Th;
