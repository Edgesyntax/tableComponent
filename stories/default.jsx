// React Modules
import React, {Component} from "react";
import ReactDOM from "react-dom";

// global.Perf = require('react-addons-perf');

// Application Modules
import Table, {Tr, Td} from "../src/table-v2/table.component.jsx";
import tableMock from "./table.mock.js";

class Default extends Component{
  render(){
    const value = 4;
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
        filterable={["name"]}>
        <Tr>
          <Td column="balance">{value}</Td>
        </Tr>
      </Table>
    )
  }
}

export default Default;
