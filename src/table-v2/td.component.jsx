// React Modules
import React from "react";
import Radium from "radium";
import JsonTree from "react-json-tree";

// Application Modules
import tableStylesheet, {brand} from "./table.stylesheet.js";

const _Td = ({td,activeRow,style,children}) => {
  var transformTd;
  const renderObject = () => {
    return <JsonTree data={td} theme={{base00: '#000', base0B: brand.primaryColor, base0D: '#999'}} />
  }
  if (td && React.isValidElement(td)) transformTd = td;
  else if (td && typeof td === "object") transformTd = renderObject();
  else if (typeof td !== "undefined") transformTd = td.toString();

  return <td style={[
      tableStylesheet.td,
      style,
      activeRow && tableStylesheet.activeIndex
    ]}>{transformTd}{children}</td>;
}
const Td = Radium(_Td);

export default Td;
