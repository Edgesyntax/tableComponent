// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Th from "./th.component.jsx";
import Funnel from "../icons/IosFunnel.component.jsx";

const Thead = ({ columns, showIndex, sort, sortable, filter, filterable, filterTable, sortTable}) => {
  const renderThead = () => {
    if (!columns || !columns.length) return null;
    return columns.map((column, index) => {
      const shouldSort = sortable && sortable.length && sortable.indexOf(column.id) !== -1 ? 1 : !sortable || !sortable.length ? 1 : 0;

      return <Th 
        name="sort"
        key={index}
        value={column.id}
        th={column}
        sort={sort}
        sortable={shouldSort}
        sortTable={sortTable}/>
    });
  }
  const renderFilters = () => {
    if(!columns || !columns.length) return null;
    return columns.map((column, index) => {
      const filterValue = column && filter && filter[column.id];
      const shouldFilter = filterable && filterable.length && filterable.indexOf(column.id) !== -1 ? 1 : !filterable || !filterable.length ? 1 : 0;
      return <Th 
        name="filter"
        value={index}
        key={index}>
        {shouldFilter ? 
          <input
            name={column.id}
            type="text"
            value={(filterValue ? filterValue : "")}
            onChange={filterTable}
            className="formControl filter" />
        : null }
        </Th>
    });
  }
  return(
    <thead>
      <tr>
        {showIndex ? <Th /> : null}
        {renderThead()}
      </tr>
      {filterable ? 
        <tr>
          {showIndex ? <Th /> : null}
          {renderFilters()}
        </tr> 
      : null}
    </thead>
  )
}

Thead.propTypes = {
  columns: PropTypes.array,
  showIndex: PropTypes.bool,
  sort: PropTypes.object,
  sortable: PropTypes.array,
  filter: PropTypes.object,
  filterable: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  filterTable: PropTypes.func,
  sortTable: PropTypes.func
}

export default Thead;
