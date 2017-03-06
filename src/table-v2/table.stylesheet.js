// Node Modules
import Color from "color";

const brand = {
  primaryColor    : "#673ab7",
  secondaryColor 	: "#ECECEC",
  alternateColor 	: "#F5F5F5",//"#f9fafc",
  backgroundColor	: "#F8F8F8",//"#f9fafc",//"#F5F5F5",//#F1F1F1
  borderColor			: "#E1E1E1",//"#E1E1E1",//#DADDE2 //eaedf1
  successColor    : "#2ecc71",//#e74c3c
  errorColor      : "#E84C3D"//#e74c3c
};

const tableStylesheet = {
  table:{
    borderCollapse: "collapse"
  },
  th:{
    backgroundColor:"#f9f9f9",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: brand.borderColor,
    fontWeight: "normal",
    padding:"2px 12px"
  },
  tr: {
    ":hover": {
      backgroundColor: "#EBEBEB"
    }
  },
  td:{
    border: `1px solid ${brand.borderColor}`,
    padding:"2px 12px"
  },
  index:{
    backgroundColor:"#f9f9f9",
    border: `1px solid ${brand.borderColor}`,
    fontWeight: "normal",
    padding:"2px 12px",
    textAlign:"center"
  },
  button:{
    display: "inline-block",
    width: "auto",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    background: "transparent",
    border: 0,
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  actionButton: {
    fontSize: "1.4em",
    margin: "0",//"0 12px 0 0"
    overflow: "hidden"
  },
  i: {
    pointerEvents: "none",
    width: "15px",
    display: "inline-block",
    verticalAlign: "middle",
  },
  formControl:{
    margin: "0px",
    height: "100%",
    width: "auto"
  },
  preview:{
    display:"block",
    cursor: "alias",
    ":hover": {}
  },
  pre: {
    display: "none",
    position: "absolute"
  },
  select:{
    border: `1px solid ${brand.borderColor}`
  },
  activeTr: {
    //borderLeft: `3px solid ${brand.primaryColor}`,
    background: Color(brand.primaryColor).alpha(0.1).lighten(0.1).hslString()
  },
  activeIndex: {
    backgroundColor: brand.primaryColor,
    color: "#fff",
    //border: `1px solid ${brand.primaryColor}`,
  }
};

export default tableStylesheet;
export {brand};
