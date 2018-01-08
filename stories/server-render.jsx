// React Modules
import React, {Component} from "react";

// Application Modules
import Table from "../src/table/table.control.jsx";
import data from "./table.mock.json";

class Main extends Component{
  render(){
    return <Table data={data} {...props} />
  }
}

export default Main;
