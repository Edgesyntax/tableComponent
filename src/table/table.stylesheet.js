// Node Modules
import Color from "color";

const brand = {
  primaryColor    : "#27ae60",
  secondaryColor  : "#f9f9f9",
  borderColor			: "#E1E1E1"
};

const tableStylesheet = {
  table:{
    borderCollapse: "collapse"
  },
  "th, tfoot td":{
    backgroundColor: brand.secondaryColor,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: brand.borderColor,
    fontWeight: "normal",
    padding:"2px 25px",
    fontSize: "inherit"
  },
  "tr:not(.activeRow):hover": {
    backgroundColor: brand.secondaryColor
  },
  td:{
    border: `1px solid ${brand.borderColor}`,
    padding:"2px 12px"
  },
  "thead button":{
    display: "inline-block",
    width: "auto",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    background: "transparent",
    border: 0,
    cursor: "pointer",
    whiteSpace: "nowrap",
    font: "inherit",
    color: "inherit"
  },
  pre: {
    display: "none",
    position: "absolute"
  },
  select:{
    height: "100%",
    margin: 0,
    border: `1px solid ${brand.borderColor}`
  },
  ".formControl":{
    height: "100%",
    width: "auto",
    margin: 0,
    border: `1px solid ${brand.borderColor}`
  },
  i: {
    pointerEvents: "none"
  },
  ".icon": {
    pointerEvents: "none",
    width: "15px",
    display: "inline-block",
    verticalAlign: "middle",
  },
  ".activeRow": {
    //borderLeft: `3px solid ${brand.primaryColor}`,
    background: Color(brand.primaryColor).alpha(0.1).lighten(0.1).hslString()
  },
  ".index":{
    backgroundColor: brand.secondaryColor,
    border: `1px solid ${brand.borderColor}`,
    fontWeight: "normal",
    padding:"2px 12px",
    textAlign:"center"
  },
  ".activeIndex": {
    backgroundColor: brand.primaryColor,
    color: "#fff",
    //border: `1px solid ${brand.primaryColor}`,
  },
  ".pages": {
    display: "inline-block",
    margin: 0
  },
  ".activePage": {
    background: brand.primaryColor,
    borderColor: brand.primaryColor,
    color: "#fff"
  },
  ".tree ul": {
    background: "transparent !important"
  },
  ".actionBtn": {
    fontSize: "1.4em",
    margin: "0",//"0 12px 0 0"
    overflow: "hidden"
  },
  ".funnel": {
    fill: brand.borderColor
  }
};

export default tableStylesheet;
export {brand};
