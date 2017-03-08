// React Modules
import React, {Component} from "react";
import ReactDOM from "react-dom";
// global.Perf = require('react-addons-perf');

// Application Modules
import Table from "../index.js";
import tableMock from "./table.mock.yaml";

class Default extends Component{
  render(){
    return <Table data={tableMock}/>
  }
}

export default Default;
