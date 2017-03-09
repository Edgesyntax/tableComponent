import React from 'react';

const style = {
  display: "inline-block",
  width: "10px",
  verticalAlign: "middle",
  marginLeft: "4px"
}

const MdArrowDropup = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props} style={style}>
      <path d="M128 320l128-128 128 128z"/>
    </svg>
  )
}

export default MdArrowDropup;
