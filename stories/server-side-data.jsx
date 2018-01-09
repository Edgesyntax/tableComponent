// React Modules
import React, {Component} from "react";

// Application Modules
import Table from "../src/table/table.control.jsx";
import data from "./table.mock.json";

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
    const header = new Headers({
      Authorization: "Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS3dhbWUgQWRqZWkiLCJlbWFpbCI6ImthZGplaUBza3UydS5jb20iLCJtZXRhZGF0YSI6eyJfaWQiOiI1ODYwMTFiNGUxODg4ZTI3MGI0N2Y1NzQifSwiYXV0aERvbWFpbiI6InNrdTJ1IiwicmVzb3VyY2VzIjpbeyJuYW1lIjoicm9sZXMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxZDAiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6InByb2ZpbGUiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxY2YiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6Iml0ZW1zIiwiX2lkIjoiNWEzMDQ2YzgwNTczNGMwMDFhZjc3MWNlIiwicGVybWlzc2lvbnMiOlsidmlldyIsImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSJdfSx7Im5hbWUiOiJpdGVtX2xvdHMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxY2QiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6Iml0ZW1fbG90X2xvY2F0aW9ucyIsIl9pZCI6IjVhMzA0NmM4MDU3MzRjMDAxYWY3NzFjYyIsInBlcm1pc3Npb25zIjpbInZpZXciLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXX0seyJuYW1lIjoiaW52ZW50b3J5X3JlcG9ydCIsIl9pZCI6IjVhMzA0NmM4MDU3MzRjMDAxYWY3NzFjYiIsInBlcm1pc3Npb25zIjpbInZpZXciLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXX0seyJuYW1lIjoiaXRlbV9zaGlwbWVudHMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxY2EiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6Iml0ZW1fc2hpcG1lbnRfb3JkZXJzIiwiX2lkIjoiNWEzMDQ2YzgwNTczNGMwMDFhZjc3MWM5IiwicGVybWlzc2lvbnMiOlsidmlldyIsImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSJdfSx7Im5hbWUiOiJpdGVtX3JlY2VpdmluZ3MiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYzgiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6Iml0ZW1fcmVsb2NhdGlvbnMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYzciLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6Iml0ZW1fYWxsb2NhdGlvbnMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYzYiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6InJldHVybnMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYzUiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6InJldHVybl9pdGVtcyIsIl9pZCI6IjVhMzA0NmM4MDU3MzRjMDAxYWY3NzFjNCIsInBlcm1pc3Npb25zIjpbInZpZXciLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXX0seyJuYW1lIjoic3RpbXMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYzMiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6InN0aW1faXRlbXMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYzIiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6ImV4ZXMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYzEiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6InVzZXJzIiwiX2lkIjoiNWEzMDQ2YzgwNTczNGMwMDFhZjc3MWMwIiwicGVybWlzc2lvbnMiOlsidmlldyIsImNyZWF0ZSIsInVwZGF0ZSIsImRlbGV0ZSJdfSx7Im5hbWUiOiJldmVudHMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYmYiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6ImNsaWVudHMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYmUiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6IndhcmVob3VzZXMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYmQiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6IndhcmVob3VzZV9sb2NhdGlvbnMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYmMiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6ImFjY2Vzc190b2tlbnMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYmIiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6ImxvZ3MiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYmEiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6Im9yZGVycyIsIl9pZCI6IjVhMzA0NmM4MDU3MzRjMDAxYWY3NzFiOSIsInBlcm1pc3Npb25zIjpbInZpZXciLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXX0seyJuYW1lIjoib3JkZXJfaXRlbXMiLCJfaWQiOiI1YTMwNDZjODA1NzM0YzAwMWFmNzcxYjgiLCJwZXJtaXNzaW9ucyI6WyJ2aWV3IiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlIl19LHsibmFtZSI6ImN1c3RvbWVycyIsIl9pZCI6IjVhMzA0NmM4MDU3MzRjMDAxYWY3NzFiNyIsInBlcm1pc3Npb25zIjpbInZpZXciLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiXX1dLCJzZXJ2aWNlcyI6WyJvcHMiLCJwcm9maWxlIiwid21zIiwib3JkZXJzIiwicmV0dXJucyIsImN1c3RvbWVycyIsImFkbWluIl0sImlhdCI6MTUxNTUxNDUxNCwiZXhwIjoxNTE1NTUwNTE0fQ.Du178HviIcDQ2QJPIRnSATdGK2dNfK1wI7ZxSurGP1A"
    });
    var url = new URL("http://localhost:10010/api/warehouses/586291edd03b170013a588fe/receivings");
    Object.keys(this.state.query).forEach(key => url.searchParams.append(key, this.state.query[key]))
    fetch(url, {
      method: "GET",
      headers: header
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
