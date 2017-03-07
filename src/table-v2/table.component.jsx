// React Modules
import React from "react";
import Radium from "radium";

// Application Modules
import tableStylesheet from "./table.stylesheet.js";
import Th from "./th.component.jsx";
import Tr from "./tr.component.jsx";
import Td from "./td.component.jsx";
import Thead from "./thead.component.jsx";
import Tfoot from "./tfoot.component.jsx";


import generateTableColumns, {validateColumns}  from "../helpers-v2/columns.js";
import sortTableAction      from "../helpers-v2/sort.js";
import filterTableAction    from "../helpers-v2/filter.js";
import limitTableAction     from "../helpers-v2/limit.js";

class Table extends React.Component{
  constructor(){
    super();
    this.state = {
      sort:{
        column: 0,
        direction: 0
      },
      pagination: 0,
      filter: ""
    }
    this.onChangeAction = this.onChangeAction.bind(this);
  }
  componentWillMount(){
    this.init(this.props);
  }
  componentWillReceiveProps(nextProps){
    this.init(nextProps);
  }
  init(props){
    var sortable,sort,limit,filter;
    // Assign user defined columns or generate columns
    this.columns   = (props.columns && validateColumns(props.columns) ? props.columns : generateTableColumns(props));
    // Make all columns sortable if no user defined sortable array
    sortable  = (props.sortable ? props.sortable : this.columns);
    // Assign default sort column or use state
    sort      = (props.sort ? props.sort : this.state.sort);
    // Assign default limit or show all data
    limit     = (props.limit ? props.limit : undefined);
    // Assign user defined filter or use state filter
    filter    = (props.filter ? props.filter : this.state.filter);

    // Check/Render child components
    this.childrenNodes = this.renderChildren(props);
    // Generate table data
    this.vTableData = this.generateTableData({data: props.data, sort, limit, filter});
    // Set application state
    this.setState({sort, sortable, limit, filter});
  }

  generateTableData({data, devMode, limit, filter, sort}){
    if (!data || !data.length) var data = [];
    // Add child Tr nodes to table data
    const cTableData = data.concat(this.childrenNodes.tr);

    if (!cTableData) return;

    (this.props.devMode ? console.time('Generating table data') : null);

    var tableData = cTableData.map((row) => {
      // Add child Td nodes to table data
      var Tr = Object.assign({}, row, this.childrenNodes.td);
      // Map table rows
      const tableRow = this.columns.map((column) => {
        for (var variable in Tr) {
          if (column.id === variable)  return Tr[variable];
        }
      });


      if (JSON.stringify(row).indexOf(this.props.activeRow) !== -1) return {data: tableRow, _activeRow: true};

      return {data: tableRow};
      // console.log(JSON.stringify(row).indexOf(this.props.activeRow) !== -1);

      // for (var variable in Tr) {
      //   if (column.id === variable)  {
      //     const td = Tr[variable];
      //     if (td.toString().indexOf(this.props.activeRow) !== -1){
      //       return {value: td, _active: true};
      //     }
      //     return {value: td};
      //   }
      // }
    });

    (this.props.devMode ? console.timeEnd('Generating table data') : null);

    // Filter table data
    (this.props.devMode ? console.time('Filtering table data') : null);
    if(filter ? tableData = filterTableAction({tableData, filter}) : null);
    (this.props.devMode ? console.timeEnd('Filtering table data') : null);

    // Sort table data
    (this.props.devMode ? console.time('Sorting table data') : null);
    if(sort ? tableData = sortTableAction({tableData, sort}) : null);
    (this.props.devMode ? console.timeEnd('Sorting table data') : null);

    this.fTableData = tableData;
    
    // Limit table data
    (this.props.devMode ? console.time('Limiting table data') : null);
    if(limit ? tableData = limitTableAction({tableData, limit, pagination: this.state.pagination}) : null);
    (this.props.devMode ? console.timeEnd('Limiting table data') : null);

    return tableData;
  }
  onChangeAction(event){
    var name = event.target.name;
    var state = this.state;
    var value = event.target.value;
    if (name === "sort") value = JSON.parse(event.target.value);
    if (name === "limit" || name === "pagination") value = parseInt(event.target.value);

    // Reset pagination
    state.pagination = 0;

    // Set action vale
    state[name] = value;

    // Generate table
    this.vTableData = this.generateTableData({
      data: this.props.data,
      limit: state.limit,
      filter: state.filter,
      sort:state.sort
    });
    this.setState(state);
  }
  renderChildren(props){
    var children = {tr:[]};
    if (!React.Children.count(props.children)) return children;
    React.Children.map(props.children, (child) => {
      // Add table rows to children object
      if (child.type.name === "Tr") {
        if (!child.props.children) {
          return children.tr.push(child.props.row);
        }
        //return children.tr.push(child.props);

        var obj = {};
        React.Children.forEach(child.props.children, (nestedChild) => {
          // TODO: Fix td value string converting into object -> cause <td> {value} </td> instead of <td>{value}</td>
          if (nestedChild.props.column && !nestedChild.props.children) return;
          obj[nestedChild.props.column] = nestedChild.props.children;
        });
        children.tr.push(obj)
      }
    });
    return children;
  }
  renderTr(){
    if (!this.vTableData) return;
    return this.vTableData.map((row, index) => {
      return <Tr
        key={index}
        row={row.data}
        index={index}
        showIndex={this.props.showIndex}
        activeRow={row._activeRow}/>
    })
  }
  renderTable(){
    return (
      <table style={[tableStylesheet.table,this.props.tableStyle]}>
        {!this.props.hideHeader ?
          <Thead
            columns={this.columns}
            showIndex={this.props.showIndex}
            sortable={this.state.sortable}
            filterable={this.props.filterable}
            limit={this.state.limit}
            limitTable={this.onChangeAction}
            filter={this.state.filter}
            filterTable={this.onChangeAction}
            sort={this.state.sort}
            sortTable={this.onChangeAction}/>
        : null }
        <tbody>
          {this.vTableData && this.vTableData.length ? this.renderTr() :
            <tr>
              <td colSpan={this.props.showIndex && this.columns ? this.columns.length + 1 : this.columns ? this.columns.length : 0}>
                <x-component-error>
                  <x-message><h3>No records found.</h3></x-message>
                </x-component-error>
              </td>
            </tr>
          }
        </tbody>
        <Tfoot
          columns={this.columns}
          tableLength={this.fTableData.length}
          limit={this.state.limit}
          pagination={this.state.pagination}
          paginateTable={this.onChangeAction}
          showIndex={this.props.showIndex}/>
      </table>
    )
  }
  render(){
    return(
      <x-component style={[{height: "100%"},this.props.style]}>
        {this.renderTable()}
      </x-component>
    );
  }
}

Table.propTypes = {
  data: React.PropTypes.array,
  showIndex: React.PropTypes.bool,
  columns: React.PropTypes.array,
  sortable: React.PropTypes.array,
  filterable: React.PropTypes.array,
  limit: React.PropTypes.number,
  devMode: React.PropTypes.bool
}

const TableComponent = Radium(Table);
export default TableComponent;
export {Tr,Td};
