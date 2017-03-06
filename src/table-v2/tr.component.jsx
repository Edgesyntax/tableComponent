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
  activeCondition
}) => {
  const renderTd = () => {
    if (!row) return;
    return row.map((td, index) => {
      return <Td key={index} td={td}/>
    })
  }
  const activeTrStyle = row.indexOf(activeCondition) !== -1 ? tableStylesheet.activeTr: null;
  return (
    <tr style={activeTrStyle}>
      {showIndex ?
        <Td td={index + 1} style={[
            tableStylesheet.index,
            row.indexOf(activeCondition) !== -1 ? tableStylesheet.activeIndex: null ]}/>
      : null}
      {renderTd()}
    </tr>
  );
}

export default Tr;
