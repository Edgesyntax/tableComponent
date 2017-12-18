// React Modules
import React from 'react';

const style = {
  display: "inline-block",
  width: "12px",
  verticalAlign: "middle"
}

const MdArrowDropdown = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props} style={style}>
      <path d="M128 192l128 128 128-128z"/>
    </svg>
  )
}

export default MdArrowDropdown;
