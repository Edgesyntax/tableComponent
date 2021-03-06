// React Modules
import React from "react";
import {Style} from "radium";

// Application Modules
import Table from "../../src/table/table.control.jsx";
import data from "../table.mock.json";

const Default = (props) => {
  return (
    <span className="styling">
      <Table data={data} {...props}/>
      <Style
        scopeSelector=".table-component"
        rules={{
          ".tc-th, .tc-tfoot .tc-td": {
            backgroundColor: "#d1f2f4",
            borderColor: "#E1E1E1"
          }
        }}/>
    </span>
  )
}

export default Default;
