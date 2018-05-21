// React Modules
import React from "react";
import PropTypes from "prop-types";

const Resize = ({ id, resize, resizeTable, onResizeStart, onResizeEnd }) => {
  const startResize = (event) => {
    event.stopPropagation();
    const parentWidth = event.target.parentElement.getBoundingClientRect().width;
    const pageX = event.pageX;
    onResizeStart({
      column: id,
      startX: pageX,
      parentWidth
    })
  }
  const resizing = (event) => {
    event.stopPropagation();
    if (resize) resizeTable(event);
  }
  const endResize = (event) => {
    event.stopPropagation();
    onResizeEnd()
  }
  return (
    <div
      className="tc-th-resizer"
      onMouseDown={(event) => onResizeStart(event, id)}></div>
  );
}

Resize.propTypes = {
  showIndex: PropTypes.bool,
  row: PropTypes.object,
  index: PropTypes.number,
  activeRow: PropTypes.bool
}

export default Resize;
