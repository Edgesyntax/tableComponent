import React from 'react';

const style = {
  display: "inline-block",
  width: "12px",
  verticalAlign: "middle",
  marginLeft: "4px"
}

const IosArrowDown = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props} style={style}>
      <path d="M128.4 160L96 192.3 256 352l160-159.7-32.4-32.3L256 287.3z"/>
    </svg>
  )
}

export default IosArrowDown;
