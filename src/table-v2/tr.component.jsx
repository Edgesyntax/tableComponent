// React Modules
import React from "react";
import Radium from "radium";

// Application Modules
import Td from "./td.component.jsx";
import tableStylesheet from "./table.stylesheet.js";

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
    <tr style={activeRow && tableStylesheet.activeTr}>
      {showIndex ?
        <Td td={index + 1} style={[ tableStylesheet.index,activeRow && tableStylesheet.activeIndex]}/>
      : null}
      {renderTd()}
    </tr>
  );
}

export default Tr;
