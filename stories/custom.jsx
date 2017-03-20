// React Modules
import React from "react";

// Application Modules
import Table, {Tr, Td, tableStylesheet} from "../dist/table.js";
import tableMock from "./table.mock.yaml";

class Default extends React.Component{
  constructor(){
    super();
    this.state = {}
  }
  renderTableList(){
    return tableMock.map((item, index) => {
      return (<Tr key={index}>
        <Td column="_id">{item._id}</Td>
        <Td column="name">{item.name}</Td>
        <Td column="email">{item.email}</Td>
        <Td column="balance">{item.balance}</Td>
        <Td column="age">{item.age}</Td>
        <Td column="registered">{item.registered}</Td>
        <Td column="status">{item.isActive ? "Active" : "Inactive"}</Td>
        <Td column="action">
          <center>
            <button
              onClick={(event) => this.setState({editItem: item._id})}> edit </button>
            <button> delete </button>
          </center>
        </Td>
        <Td column="json">
          {[
            {"sku":"80074835","lot":"EM51398","qty":"19","expDate":"2019-12-28T00:00:00.000Z","selected":true, items: [{name: "you"}]}
          ]}
        </Td>
      </Tr>
    )
    });
  }
  render(){
    return <Table
      limit={25}
      columns={[
        {id: "_id"},
        {id: "balance"},
        {id: "age"},
        {id: "name"},
        {id: "email"},
        {id: this.props.dataType === "jsx" ? "action" : "json"}
      ]}
      activeRow={{id: "_id", value: this.state.editItem}}>{this.renderTableList()}</Table>
  }
}

export default Default;
