// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Th from "./th.component.jsx";
import Funnel from "../icons/IosFunnel.component.jsx";

const Thead = ({ columns, showIndex, selectable, sort, sortable, filter, filterable, filterTable, sortTable, resize, resizeTable, onResizeStart, onResizeEnd, selectAllRows}) => {
  const renderThead = () => {
    if (!columns || !columns.length) return null;
    return columns.map((column, index) => {
      const shouldSort = sortable && sortable.length && sortable.indexOf(column.id) !== -1 ? 1 : !sortable || !sortable.length ? 1 : 0;
      return <Th 
        name="sort"
        key={index}
        {...column}
        sort={sort}
        sortable={shouldSort}
        sortTable={sortTable}
        resize={resize}
        resizeTable={resizeTable}
        onResizeStart={onResizeStart}
        onResizeEnd={onResizeEnd}
        isLastColumn={columns && index + 1 === columns.length}/>
    });
  }
  const renderFilters = () => {
    if(!columns || !columns.length) return null;
    return columns.map((column, index) => {
      const filterValue = column && filter && filter[column.id];
      const shouldFilter = filterable && filterable.length && filterable.indexOf(column.id) !== -1 ? 1 : !filterable || !filterable.length ? 1 : 0;
      return <Th 
        name="filter"
        key={index}
        {...column}>
        {shouldFilter && !column.filter? 
          <input
            name={column.id}
            type="text"
            value={(filterValue ? filterValue : "")}
            onChange={filterTable}
            className="tc-filter" />
        : null }
        {shouldFilter && column.filter ? <column.filter 
          columnName={column.id}
          onChange={filterTable} 
          filter={filterValue}/> : null}
        </Th>
    });
  }
  
  return(
    <main className="tc-thead">
      <main className="tc-tr">
        {selectable ?
          <Th className="index select" width={20}>
            <input type="checkbox" onChange={() => selectAllRows()}/>
          </Th>
        : null}
        {showIndex ? <Th className="index" width={50}/> : null}
        {renderThead()}
      </main>
      {filterable ? 
        <main className="tc-tr">
          {showIndex ? <Th className="index" width={50}/> : null}
          {renderFilters()}
        </main> 
      : null}
    </main>
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
