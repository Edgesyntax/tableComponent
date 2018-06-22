// React Modules
import React, {Component} from "react";

// Application Modules
import Table from "../../src/table/table.control.jsx";

class Main extends Component{
  constructor(){
    super()
    this.state = {
      query: {
        page: 6,
        pageSize: 25
      },
      count: 54
    }
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData(table){
    console.log("Fetching data......")
    var url = new URL("https://jsonplaceholder.typicode.com/posts");
    Object.keys(this.state.query).forEach(key => url.searchParams.append(key, this.state.query[key]))
    fetch(url, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      if(!data || !data.length) return []
      this.setState({ data })
    })
    .catch((err) => console.log(err))
  }
  render(){
    // console.log("server side",this.state.data, this.state.query.page, this.state.query.pageSize, this.state.count)

    // defaultPage={this.state.query.page}
    // defaultPageSize={this.state.query.pageSize}
    // count={this.state.count}
    return <Table 
      data={this.state.data}
      manual
      showIndex
      onStateChange={this.fetchData} />
  }
}

export default Main;
