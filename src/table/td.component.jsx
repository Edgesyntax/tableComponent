// React Modules
import React from "react";
import JsonTree from "react-json-tree";
import PropTypes from "prop-types";

// Application Modules
import {brand} from "./table.stylesheet.js";

const Td = ({td, activeRow, column, row, className}) => {
  var transformTd;
  if (column && column.render && column.accessor) return <td>{column.render(column.accessor(row), row)}</td>
  else if (column && column.render) return <td>{column.render(td, row)}</td>

  const renderObject = () => <JsonTree data={td} hideRoot={true} theme={{
    tree: ({style}) => ({ style: Object.assign({}, style, {backgroundColor: undefined})}),
    label: ({style}) => {},
    arrowSign: {color: "inherit"},
    nestedNodeItemString: () => ({ className: "jsonNestedNodeItemString"}),
    valueText: () => ({ className: "jsonValueText"})
  }}/>

  // Apply Accessor
  if (column && column.accessor) td = column.accessor(row);

  // Check td type
  if (td && React.isValidElement(td)) transformTd = td;
  else if (td && typeof td === "object") transformTd = renderObject();
  else if (td != null || typeof td === "boolean") transformTd = td.toString();

  return <td className={(activeRow ? "activeIndex" : className)}>{transformTd}</td>;
}

Td.propTypes = {
  td: PropTypes.any,
  activeRow: PropTypes.bool,
  className: PropTypes.string
}

export default Td;
