// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import DownArrow from "../icons/mdArrowDropdown.component.jsx";
import UpArrow from "../icons/mdArrowDropup.component.jsx";

const Th = ({ th, name, value, sort, sortTable, sortable, children }) => {
  // Sort table using index
  var transformTh = (th && th.label ? th.label.toString() : th && th.id ? th.id.toString() : "");

  const sortColumn = sort && Object.keys(sort)[0]
  const currentSortDirection = sort && Object.values(sort)[0];
  
  var sortDirection = "ASC"; // Set default sort to ASC on `sortTable`
  
  // Check if sorting is in dec order
  if (sort && sortColumn === value && currentSortDirection === "DES") sortDirection = "INI";
  // Check if sorting is in reset order
  else if (sort && sortColumn === value && currentSortDirection === "INI") sortDirection = "ASC";
  // Check if sorting is in asc order
  else if (sort && sortColumn === value && currentSortDirection === "ASC") sortDirection = "DES";
  
  if (sortable) {
    transformTh =
      <button
        name={name}
        value={JSON.stringify({ [value]: sortDirection })}
        onClick={sortTable}
        style={{ width: "100%" }}>
        {transformTh}
        {sortColumn === value && currentSortDirection === "DES" ? <DownArrow className="icon" /> : null}
        {sortColumn === value && currentSortDirection === "ASC" ? <UpArrow className="icon" /> : null}
      </button>
  }
  return <th>{transformTh}{children}</th>;
}

Th.propTypes = {
  th: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.any,
  sort: PropTypes.object,
  sortTable: PropTypes.func,
  sortable: PropTypes.number,
  children: PropTypes.node
}

export default Th;
