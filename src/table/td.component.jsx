// React Modules
import React from "react";
import Radium from "radium";
import JsonTree from "react-json-tree";

// Application Modules
import {brand} from "./table.stylesheet.js";

const _Td = ({td,activeRow,className,children}) => {
  var transformTd;
  const renderObject = () => <div className="tree">
    <JsonTree
      data={td}
      hideRoot={true}/></div>
  if (td && React.isValidElement(td)) transformTd = td;
  else if (td && typeof td === "object") transformTd = renderObject();
  else if (typeof td !== "undefined") transformTd = td.toString();

  return <td className={(activeRow ? `${className} activeIndex` : className)}>{transformTd}{children}</td>;
}
const Td = Radium(_Td);

export default Td;


// theme={{
//   base00: '#000',
//   base0B: brand.primaryColor,
//   base0D: '#999'
// }}
