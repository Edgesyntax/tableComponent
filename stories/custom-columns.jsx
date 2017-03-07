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
        columns={[
          {id: "age", label: "age"},
          {id: "eyeColor", label: "eyeColor"},
          {id: "gender", label: "gender"},
          {id: "company", label: "company"},
          {id: "email", label: "email"},
          {id: "registered", label: "registered"},
          {id: "isActive", label: "isActive"}
        ]}
        activeRow={"5844822b5913d7ec0efb189b"}
        showIndex={true}
        limit={25}
        filterable={["name"]}/>
    )
  }
}

export default Default;
