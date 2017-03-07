// React Modules
import React from "react";

// Application Modules
import Th from "./th.component.jsx";
import tableStylesheet, {brand} from "./table.stylesheet.js";

const Thead = ({
  columns,
  showIndex,
  sort,
  sortable,
  filterable,
  filter,
  filterTable,
  limit,
  limitTable,
  sortTable
}) => {
  const renderThead = () => {
    return columns.map((column, index) => {
      return <Th name="sort"
        value={index}
        key={index}
        th={column}
        sort={sort}
        sortable={sortable && sortable.indexOf(column) !== -1 ? 1 : 0}
        sortTable={sortTable}/>
    });
  }
  const colSpan = showIndex ? columns.length + 1 : columns.length;
  const renderFilter = () => {
    return (
      <div
        style={{display: "inline-block",width: "50%",textAlign: "left"}}>
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={filterTable}
          placeholder="Filter"
          style={[tableStylesheet.formControl,{border: `1px solid ${brand.borderColor}`}]}/>
      </div>
    );
  }
  const renderLimiter = () => {
    return (
      <div
        style={{display: "inline-block",width: "50%",textAlign: "right"}}>
        <select name="limit" style={[tableStylesheet.formControl,tableStylesheet.select]} value={limit} onChange={limitTable}>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    );
  }
  return(
    <thead>
      {filterable && filterable.length || limit ?
        <tr>
          <Th
            colSpan={colSpan}
            style={[tableStylesheet.th,{padding: "4px 25px", textAlign: "right"}]}>
            {filterable && filterable.length ? renderFilter() : null}
            {limit ? renderLimiter() : null}
          </Th>
        </tr>
      : null }
      <tr>
        {showIndex ? <Th /> : null}
        {renderThead()}
      </tr>
    </thead>
  )
}

export default Thead;
