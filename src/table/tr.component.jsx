// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Td from "./td.component.jsx";

const Tr = ({ columns, showIndex, selectable, selectRow, row, index, activeRow}) => {
  const renderTd = () => columns.map((column, index) => <Td key={index} td={row[column.id]} {...column} row={row}/>)

  return (
    <main className={activeRow ? "tc-tr active" : "tc-tr"}>
      {selectable ?
        <Td className="index select" activeRow={activeRow} maxWidth={20}>
          <input type="checkbox" onChange={() => selectRow(row)}/>
        </Td>
      : null}
      {showIndex ? <Td td={index + 1} className="index" activeRow={activeRow} maxWidth={65}/> : null}
      {row && renderTd()}
    </main>
  );
}

Tr.propTypes = {
  showIndex: PropTypes.bool,
  row: PropTypes.object,
  index: PropTypes.number,
  activeRow: PropTypes.bool
}

export default Tr;
