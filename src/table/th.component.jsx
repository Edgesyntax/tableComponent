// React Modules
import React from "react";
import Radium from "radium";

// Application Modules
import DownArrow from "../icons/mdArrowDropdown.component.jsx";
import UpArrow from "../icons/mdArrowDropup.component.jsx";

const _Th = ({th,name,value,colSpan,style,sort,sortTable,sortable,children}) => {

  console.log(sort);
  // Sort table using index
  var transformTh = (th && th.label ? th.label.toString() : th && th.id ? th.id.toString() : "");
  var sortColumn      = (sort && sort.column.toString() ? sort.column : null); // Add to string to capture 0 index
  var sortDirection   = (sort && sort.direction ? "ASC": null); // Set 1 to default to asc table on `sortTable`

  if (sort && sortColumn === value) {
    console.log("Before", sortColumn, sortDirection);
  }
  // Check if sorting is in dec order
  if (sort && sortColumn === value && sort.direction === "DES") sortDirection = "INI";

  // Check if sorting is in reset order
  if(sort && sortColumn === value && sort.direction === "INI" ) sortDirection = "ASC"

  // Check if sorting is in asc order
  if(sort && sortColumn === value && sort.direction === "ASC" ) sortDirection = "DES"
  if (sort && sortColumn === value) {

    console.log("After", sortColumn, sortDirection);
  }

  if (sortable) {
    transformTh =
      <button
        name={name}
        value={`{"column": ${value}, "direction": "${sortDirection}"}`}
        onClick={sortTable}>
        {transformTh}
        {sortColumn === value && sort.direction === "DES"?
          <DownArrow className="icon" />
          : null}
        {sortColumn === value && sort.direction === "ASC"?
          <UpArrow className="icon" />
          : null}
      </button>
  }
  return <th colSpan={colSpan}>{transformTh}{children}</th>;
}

const Th = Radium(_Th);
export default Th;
