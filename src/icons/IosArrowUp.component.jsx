import React from 'react';

const style = {
  display: "inline-block",
  width: "10px",
  verticalAlign: "middle",
  marginLeft: "4px"
}

const IosArrowUp = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props} style={style}>
      <path d="M383.6 352l32.4-32.3L256 160 96 319.7l32.4 32.3L256 224.7z"/>
    </svg>
  )
}

export default IosArrowUp;
