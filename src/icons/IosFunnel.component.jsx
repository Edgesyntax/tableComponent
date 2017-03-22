import React from 'react';

const style = {
  display: "inline-block",
  width: "12px",
  verticalAlign: "middle"
}

const IosFunnel = (props) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props} style={Object.assign({},style, props.style)}>
    <path d="M32 64v32l176 192v128l96 32V288L480 96V64H32z"/>
  </svg>
  )
}

export default IosFunnel;
