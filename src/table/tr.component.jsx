// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Td from "./td.component.jsx";

const Tr = ({ showIndex, row, index, activeRow}) => {
  const renderTd = () => {
    if (!row) return;
    return row.map((td, index) => <Td key={index} td={td}/>)
  }

  return (
    <tr className={activeRow && "activeRow"}>
      {showIndex ?
        <Td td={index + 1} className="index" activeRow={activeRow}/>
      : null}
      {renderTd()}
    </tr>
  );
}

Tr.propTypes = {
  showIndex: PropTypes.bool,
  row: PropTypes.array,
  index: PropTypes.number,
  activeRow: PropTypes.bool
}

export default Tr;
