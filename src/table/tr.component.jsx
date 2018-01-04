// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Td from "./td.component.jsx";

const Tr = ({ columns, showIndex, row, index, activeRow}) => {
  const renderTd = () => {
    if (!row) return;
    return columns.map((column, index) => <Td key={index} td={row[column.id]} column={column} row={row}/>)
  }

  return (
    <tr className={activeRow ? "activeRow" : ""}>
      {showIndex ?
        <Td td={index + 1} className="index" activeRow={activeRow}/>
      : null}
      {renderTd()}
    </tr>
  );
}

Tr.propTypes = {
  showIndex: PropTypes.bool,
  row: PropTypes.object,
  index: PropTypes.number,
  activeRow: PropTypes.bool
}

export default Tr;
