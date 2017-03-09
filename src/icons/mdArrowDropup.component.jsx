// React Modules
import React from 'react';
import Radium from "radium";

const style = {
  display: "inline-block",
  width: "12px",
  verticalAlign: "middle"
}

const MdArrowDropup = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props} style={[style, props.style]}>
      <path d="M128 320l128-128 128 128z"/>
    </svg>
  )
}

export default Radium(MdArrowDropup);
