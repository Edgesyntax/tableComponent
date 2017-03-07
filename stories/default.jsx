// React Modules
import React, {Component} from "react";
import ReactDOM from "react-dom";

// global.Perf = require('react-addons-perf');

// Application Modules
import Table from "../src/table-v2/table.component.jsx";
import tableMock from "./table.mock.js";

class Default extends Component{
  render(){
    return(
      <Table
        data={tableMock}
        columns={[{id: "_id", label: "me"},{id: "balance", label: "yo"}]}
        showIndex={true}
        limit={25}
        filterable={["name"]}/>
    )
  }
}

export default Default;
