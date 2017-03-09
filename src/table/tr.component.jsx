// React Modules
import React from "react";

// Application Modules
import Td from "./td.component.jsx";

const Tr = ({
  showIndex,
  row,
  index,
  activeRow
}) => {
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

export default Tr;
