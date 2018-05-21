// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Resize from "./resize.component.jsx";
import DownArrow from "../icons/mdArrowDropdown.component.jsx";
import UpArrow from "../icons/mdArrowDropup.component.jsx";

const Th = ({ id, label, name, sort, sortTable, sortable, className, resizeTable, onResizeStart, onResizeEnd, resize, children, minWidth, width, maxWidth, isLastColumn }) => {
  if(!width) width = 100;
  
  // Sort table using index
  var transformTh = (label ? label.toString() : id ? id.toString() : "");

  const sortColumn = sort && Object.keys(sort)[0]
  const currentSortDirection = sort && Object.values(sort)[0];
  
  var sortDirection = "ASC"; // Set default sort to ASC on `sortTable`
  
  // Check if sorting is in dec order
  if (sort && sortColumn === id && currentSortDirection === "DES") sortDirection = "INI";
  // Check if sorting is in reset order
  else if (sort && sortColumn === id && currentSortDirection === "INI") sortDirection = "ASC";
  // Check if sorting is in asc order
  else if (sort && sortColumn === id && currentSortDirection === "ASC") sortDirection = "DES";
  
  var thClass = "tc-th";
  if (className) thClass = thClass.concat(" ", className)

  const renderTh = () => {
    if (name === "filter") return null;
    if (sortable){
      return (
        <button
          name={name}
          value={JSON.stringify({ [id]: sortDirection })}
          onClick={sortTable}
          style={{ width: "100%" }}>
          {transformTh}
          {sortColumn === id && currentSortDirection === "DES" ? <DownArrow className="icon" /> : null}
          {sortColumn === id && currentSortDirection === "ASC" ? <UpArrow className="icon" /> : null}
        </button>
      )
    }
    return transformTh
  }
  return <div className={thClass} style={{ flex: `${width} 0 auto`, width: `${width}px`, minWidth: `${minWidth}px`, maxWidth: `${maxWidth}px` }}>
    <div className="tc-th-content">
      {renderTh()}

      {children}
    </div>
    {!isLastColumn && resizeTable ? <Resize id={id} resize={resize} resizeTable={resizeTable} onResizeStart={onResizeStart} onResizeEnd={onResizeEnd}/> : null }
  </div>;
}

Th.propTypes = {
  th: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.any,
  sort: PropTypes.object,
  sortTable: PropTypes.func,
  sortable: PropTypes.number,
  children: PropTypes.node
}

export default Th;
