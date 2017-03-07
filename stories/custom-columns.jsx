// React Modules
import React, {Component} from "react";
import ReactDOM from "react-dom";

// global.Perf = require('react-addons-perf');

// Application Modules
import Table from "../src/table/table.component.jsx";
import tableMock from "./table.mock.yaml";

class Default extends Component{
  render(){
    return(
      <Table
        data={tableMock}
        columns={[
          {id: "balance", label: "Balance"},
          {id: "age", label: "How old are you"},
          {id: "eyeColor", label: "Eye Color"},
          {id: "gender", label: "Gender"},
          {id: "company", label: "Company"},
          {id: "email", label: "Email"},
          {id: "registered", label: "Registered"},
          {id: "isActive", label: "Status"}
        ]}
        activeRow={"5844822b5913d7ec0efb189b"}
        showIndex={true}
        limit={25}
        filterable={["name"]} />
    )
  }
}

export default Default;
