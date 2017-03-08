// React Modules
import React, {Component} from "react";
import ReactDOM from "react-dom";
// global.Perf = require('react-addons-perf');

// Application Modules
import Table, {Tr, Td, tableStylesheet} from "../dist/table.js";
import tableMock from "./table.mock.yaml";

class Default extends Component{
  renderTableList(){
    return tableMock.map((item, index) => {
      return (<Tr key={index}>
        <Td column="balance">{item.balance}</Td>
        <Td column="age">{item.age}</Td>
        <Td column="eyeColor">{item.eyeColor}</Td>
        <Td column="name">{item.name}</Td>
        <Td column="gender">{item.gender}</Td>
        <Td column="company">{item.company}</Td>
        <Td column="email">{item.email}</Td>
        <Td column="registered">{item.registered}</Td>
        <Td column="status">{item.isActive ? "Active" : "Inactive"}</Td>
        <Td column="action">
          <div style={{textAlign: "center"}}>
            <button
            style={tableStylesheet.button}>
            button
              <i className="ion-ios-create-outline" style={tableStylesheet.i}></i>
            </button>
            <button
              onClick={this.deleteItemHandler}
              value={item._id}
              style={tableStylesheet.button}>
              button
              <i className="ion-ios-trash-outline" style={tableStylesheet.i}></i>
            </button>
          </div>
        </Td>
      </Tr>
    )
    });
  }
  render(){
    return <Table
      limit={15}
      sort={{
        column: 1,
        direction: 1
      }}
      activeRow={{id: "_id", value: "5844822b26f2fd9d3a0e02db"}}>{this.renderTableList()}</Table>
  }
}

export default Default;
