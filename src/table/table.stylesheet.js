const brand = {
  primaryColor    : "#c0392b",
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
  select:{
    height: "100%",
    margin: 0,
    border: `1px solid ${brand.borderColor}`
  },
  i: {
    pointerEvents: "none"
  },
  ".activeRow": {
    background: "rgba(209, 67, 51, 0.1)"
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
    color: "#fff"
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
  ".jsonValueText": {
    color: brand.primaryColor
  },
  ".jsonNestedNodeItemString": {
    color: "#999"
  },
  ".funnel": {
    fill: brand.borderColor
  }
};


const tableControls = Object.assign({}, tableStylesheet, {
  button:{
    display: "inline-block",
    height: "20px",
    width: "auto",
    margin: 0,
    padding: 0,
    lineHeight: 0,
    overflow: "hidden",
    background: "transparent",
    border: 0,
    cursor: "pointer"
  },
  actionBtn: {
    fontSize: "1.4em",
    margin: "0",
    overflow: "hidden"
  }
});

export default tableStylesheet;
export {brand, tableControls};
