```js
import React from "react";

import Table, {Tr, Td, tableStylesheet} from "../dist/table.js";
import data from "./table.mock.json";

class Custom extends React.Component{
  render(){
    return <Table 
      data={data} 
      columns={[
        { id: "_id" },
        { id: "balance" },
        { id: "age", render: (value, row) => {
          console.log(value, row)
          return <span style={{color: "red"}}>{value}</span> 
        }},
        { id: "name" },
        { id: "email" },
        { id: "isActive", label: "status", render: (value, row) => <span>{value === true ? "Active" : value === false ? "Inactive" : ""}</span>},
        { id: "action", render: (value, row) => {
          return (
            <center>
              <button> edit </button>
              <button> delete </button>
            </center>
          )
        }}
      ]}/>
  }
}

export default Custom;

```



custom render method for version `~1.0.0` is as show below
```js
import React from "react";

import Table, {Tr, Td, tableStylesheet} from "../dist/table.js";
import data from "./table.mock.json";

class Custom extends React.Component{
  renderTableList(){
    return data.map((item, index) => {
      return (<Tr key={index}>
        <Td column="name">{item.name}</Td>
        <Td column="email">{item.email}</Td>
        <Td column="status">{item.isActive ? "Active" : "Inactive"}</Td>
        <Td column="action">
          <center>
            <button> edit </button>
            <button> delete </button>
          </center>
        </Td>
      </Tr>
    )
    });
  }
  render(){
    return <Table>{this.renderTableList()}</Table>
  }
}

export default Custom;

```
