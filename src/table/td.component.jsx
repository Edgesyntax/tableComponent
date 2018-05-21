// React Modules
import React from "react";
import JsonTree from "react-json-tree";
import PropTypes from "prop-types";

// Application Modules
import {brand} from "./table.stylesheet.js";

const Td = ({ td, children, activeRow, render, accessor, row, className, minWidth, width, maxWidth }) => {
  var transformTd;
  if (!width) width = 100;
  var tdClass = "tc-td";
  if (className) tdClass = tdClass.concat(" ", className)
  if (activeRow) tdClass = tdClass.concat(" activeIndex");

  const renderTd = (data) => {
    return <div className={tdClass} style={{ flex: `${width} 0 auto`, width: `${width}px`, minWidth: `${minWidth}px`, maxWidth: `${maxWidth}px` }}>{data}</div>
  }
  if (render && accessor) return renderTd(render(accessor(row), row))
  else if (render) return renderTd(render(td, row))

  const renderObject = () => <JsonTree data={td} hideRoot={true} theme={{
    tree: ({style}) => ({ style: Object.assign({}, style, {backgroundColor: undefined})}),
    label: ({style}) => {},
    arrowSign: {color: "inherit"},
    nestedNodeItemString: () => ({ className: "jsonNestedNodeItemString"}),
    valueText: () => ({ className: "jsonValueText"})
  }}/>

  // Apply Accessor
  if (accessor) td = accessor(row);

  // Check td type
  if (td && React.isValidElement(td)) transformTd = td;
  else if (td && typeof td === "object") transformTd = renderObject();
  else if (td != null || typeof td === "boolean") transformTd = td.toString();
  else if (children) transformTd = children;
  
  return renderTd(transformTd);
}

Td.propTypes = {
  td: PropTypes.any,
  activeRow: PropTypes.bool,
  className: PropTypes.string
}

export default Td;
