// React Modules
import React, {Component} from "react";
import ReactDOM from "react-dom";

// global.Perf = require('react-addons-perf');

// Application Modules
import Table from "../src/table/table.component.jsx";
import tableMock from "./table.mock.js";

class App extends Component{
  render(){
    return(
      <x-app>
        <Table
          data={tableMock}
          showIndex={true}
          filterable={["name"]}/>
      </x-app>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
