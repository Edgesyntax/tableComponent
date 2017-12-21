// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import DownArrow from "../icons/mdArrowDropdown.component.jsx";
import UpArrow from "../icons/mdArrowDropup.component.jsx";

const Th = ({ th, name, value, sort, sortTable, sortable, children }) => {
  // Sort table using index
  var transformTh = (th && th.label ? th.label.toString() : th && th.id ? th.id.toString() : "");
  var sortColumn      = (sort && sort.column.toString() ? sort.column : null); // Add to string to capture 0 index
  var sortDirection   = "ASC"; // Set default sort to ASC on `sortTable`

  // Check if sorting is in dec order
  if (sort && sortColumn === value && sort.direction === "DES") sortDirection = "INI";

  // Check if sorting is in reset order
  if(sort && sortColumn === value && sort.direction === "INI" ) sortDirection = "ASC";

  // Check if sorting is in asc order
  if(sort && sortColumn === value && sort.direction === "ASC" ) sortDirection = "DES";

  if (sortable) {
    transformTh =
      <button
        name={name}
        value={`{"column": "${value}", "direction": "${sortDirection}"}`}
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
