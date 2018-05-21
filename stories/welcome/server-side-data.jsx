// React Modules
import React, {Component} from "react";

// Application Modules
import Table from "../../src/table/table.control.jsx";
import data from "../table.mock.json";

class Main extends Component{
  constructor(){
    super()
    this.state = {
      query: {
        page: 1,
        pageSize: 25
      },
      count: 54
    }
    this.fetchData = this.fetchData.bind(this);
  }
  componentWillMount(){
    this.fetchData()
  }
  fetchData(table){
    console.log(table)
    var url = new URL("http://localhost:10010/api/warehouses/586291edd03b170013a588fe/receivings");
    Object.keys(this.state.query).forEach(key => url.searchParams.append(key, this.state.query[key]))
    fetch(url, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      const receivingList = data.map((receiving) => {
        if (!receiving) return;
        const { _id, createdAt, user, payload, response } = receiving;
        return {
          _id,
          createdAt,
          user: user && user.email,
          control: payload && payload.receivingControl,
          clientSku: payload && payload.clientSku,
          sku: payload && payload.sku,
          lotNumber: payload && payload.lotNumber,
          expirationDate: payload && payload.expirationDate && new Date(payload.expirationDate).toLocaleDateString(undefined, { year: '2-digit', month: '2-digit', day: '2-digit' }),
          location: payload && payload.location,
          units: payload && payload.units,
          labels: payload && payload.labels,
          quantity: payload && payload.quantity,
          statusCode: response && response.statusCode,
          void: receiving.void
        };
      });
      this.setState({ data: receivingList })
    })
    .catch((err) => console.log(err))
  }
  render(){
    return <Table 
      data={this.state.data}
      showIndex
      columns={[
        { id: "createdAt", label: "receiving date" },
        { id: "clientSku", label: "client sku" },
        { id: "sku" },
        { id: "lotNumber", label: "lot number" },
        {
          id: "expirationDate", label: "expiration", filter: ({ columnName, onChange, filter }) => (
            <input
              type="date"
              className="formControl filter"
              name={columnName}
              onChange={(event) => onChange(event)}
              value={filter || ""} />
          )
        },
        { id: "location" },
        {
          id: "quantity", filter: ({ columnName, onChange, filter }) => (
            <input
              type="number"
              className="formControl filter"
              name={columnName}
              onChange={(event) => onChange(event)}
              value={filter || ""} />
          )
        },
        {
          id: "void", filter: ({ columnName, onChange, filter }) => (
            <select
              name={columnName}
              onChange={(event) => onChange(event)}
              value={filter}>
              <option value="">All</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          )
        },
        {
          id: "statusCode", label: "status code",
          render: (value, row) => <span style={{ color: (row.statusCode !== 200 ? "red" : "green") }}>{value}</span>,
          filter: ({ columnName, onChange, filter }) => (
            <select
              name={columnName}
              onChange={(event) => onChange(event)}
              value={filter}>
              <option value="">All</option>
              <option value={200}>Success</option>
              <option value={400}>Error</option>
            </select>
          )
        }
      ]}
      manual
      pageSize={this.state.query.pageSize}
      total={this.state.count}
      onStateChange={this.fetchData} />
  }
}

export default Main;
