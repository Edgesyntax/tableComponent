// React Modules
import React from "react";

// Application Modules
import Th from "./th.component.jsx";
import Funnel from "../icons/IosFunnel.component.jsx";

const Thead = ({
  columns,
  showIndex,
  sort,
  sortable,
  hideFilter,
  filter,
  filterTable,
  limit,
  limitTable,
  sortTable
}) => {
  const renderThead = () => {
    return columns.map((column, index) => {
      const shouldSort = sortable && sortable.length && sortable.indexOf(column.id) !== -1 ? 1 : !sortable || !sortable.length ? 1 : 0;

      return <Th name="sort"
        value={index}
        key={index}
        th={column}
        sort={sort}
        sortable={shouldSort}
        sortTable={sortTable}/>
    });
  }
  const colSpan = showIndex ? columns.length + 1 : columns.length;
  const renderFilter = () => {
    const width = limit ? "50%" : "100%"
    return (
      <div
        style={{display: "inline-block",width,textAlign: "left"}}>
        <div style={{position: "relative"}}>
          <Funnel style={{
            height: "100%",
            position: "absolute",
            padding: "0 6px",
            textAlign: "center"
          }}/>
          <input
            name="filter"
            type="text"
            value={filter}
            onChange={filterTable}
            placeholder="Filter"
            className="formControl"
            style={{
              display: "inline-block",
              paddingLeft: "24px"
            }}/>
        </div>
      </div>
    );
  }
  const renderLimiter = () => {
    const options = [25, 50, 100];
    const width = !hideFilter ? "50%" : "100%";
    if (options.indexOf(limit) === -1) options.unshift(limit);

    const renderOptions = () => options.map((option, index) => <option key={index} value={option}>{option}</option>)
    return (
      <div
        style={{display: "inline-block",width,textAlign: "right"}}>
        <select name="limit" value={limit} onChange={limitTable}>
          {renderOptions()}
        </select>
      </div>
    );
  }
  return(
    <thead>
      {!hideFilter || limit ?
        <tr>
          <Th
            colSpan={colSpan}>
            {!hideFilter ? renderFilter() : null}
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
