// TODO: Add propTypes check to all components
// TODO: Fix td value string converting into object -> cause <td> {value} </td> instead of <td>{value}</td>
// TODO: Add ability to filter specific columns
// TODO: Expose action events [onFilter, onSort, onLimit, onPaginate]

// React Modules
import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

// Application Modules
import tableStylesheet from "./table.stylesheet.css";
import Th from "./th.component.jsx";
import Tr from "./tr.component.jsx";
import Td from "./td.component.jsx";
import Thead from "./thead.component.jsx";
import Tfoot from "./tfoot.component.jsx";

import generateTableColumns, {validateColumns}  from "../helpers/columns.js";
import sortTableAction      from "../helpers/sort.js";
import filterTableAction    from "../helpers/filter.js";
import limitTableAction     from "../helpers/limit.js";

class Table extends React.Component{
  constructor(){
    super();
    this.state = {
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
    sortable  = (props.sortable ? props.sortable : this.columns.map((column) => column.id));
    // Assign default sort column or use state
    sort      = (this.state.sort ? this.state.sort : props.sort);
    // Assign default limit or show all data
    limit     = (this.state.limit ? this.state.limit : props.limit);
    // Assign user defined filter or use state filter
    filter    = (this.state.filter ? this.state.filter : props.filter ? props.filter : "");

    // Check/Render child components
    this.childrenNodes = this.renderChildren(props);
    // Generate table data
    this.vTableData = this.generateTableData({props, sort, limit, filter});
    // Set application state
    this.setState({sort, sortable, limit, filter});
  }
  generateTableData({props, devMode, limit, filter, sort}){
    var data = props.data, activeRow = props.activeRow;

    if (!data || !data.length) var data = [];
    // Add child Tr nodes to table data
    const cTableData = data.concat(this.childrenNodes.tr);

    if (!cTableData) return;

    (this.props.devMode ? console.time('Generating table data') : null);

    var tableData = cTableData.map((row) => {
      // Add child Td nodes to table data
      var Tr = Object.assign({}, row, this.childrenNodes.td), rowObject;
      // Map table rows
      const tableRow = this.columns.map((column) => {
        for (var variable in Tr) {
          if (column.id === variable)  return Tr[variable];
        }
      });

      rowObject = {data: tableRow};
      // Add active row metadata
      if (activeRow && activeRow.id && activeRow.value) {
        var activeRowKey = row[activeRow.id];
        if (activeRowKey === activeRow.value && !React.isValidElement(activeRowKey)) {
          rowObject = Object.assign({}, rowObject, {_activeRow: true});
        }
      }
      return rowObject;
    });

    (this.props.devMode ? console.timeEnd('Generating table data') : null);

    // Filter table data
    (this.props.devMode ? console.time('Filtering table data') : null);
    if(filter ? tableData = filterTableAction({tableData, filter, filterable: this.props.filterable}) : null);
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
      props: this.props,
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
        if (!child.props.children) return children.tr.push(child.props.row);

        var obj = {};
        React.Children.forEach(child.props.children, (nestedChild) => {
          if (nestedChild.props.column && !nestedChild.props.children) return;
          obj[nestedChild.props.column] = nestedChild.props.children;
        });
        children.tr.push(obj)
      }
    });

    // Generate table columns if not specified columns
    if (!this.columns || !this.columns.length) this.columns = generateTableColumns({data: children.tr});
    return children;
  }
  renderTr(){
    if (!this.vTableData) return;
    return this.vTableData.map((row, index) => {
      return <Tr
        key={index}
        row={row.data}
        index={(this.state.pagination ? index + (this.state.pagination * this.state.limit) : index)}
        showIndex={this.props.showIndex}
        activeRow={row._activeRow}/>
    })
  }
  render(){
    return(
      <main className="tableComponent">
        <table>
          {!this.props.hideHeader ?
            <Thead
              columns={this.columns}
              showIndex={this.props.showIndex}
              sortable={this.state.sortable}
              hideFilter={this.props.hideFilter}
              limit={this.state.limit}
              limitTable={this.onChangeAction}
              filter={this.state.filter}
              filterable={this.props.filterable}
              filterTable={this.onChangeAction}
              sort={this.state.sort}
              sortTable={this.onChangeAction}/>
          : null }
          <tbody>
            {this.vTableData && this.vTableData.length ? this.renderTr() :
              <tr>
                <td colSpan={this.props.showIndex && this.columns ? this.columns.length + 1 : this.columns ? this.columns.length : 0}>
                  <h3>{this.props.noDataText ? this.props.noDataText : "No records found."}</h3>
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
      </main>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array,
  showIndex: PropTypes.bool,
  columns: PropTypes.array,
  filter: PropTypes.string,
  filterable: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  sortable: PropTypes.array,
  limit: PropTypes.number,
  activeRow: PropTypes.object,
  devMode: PropTypes.bool
}

export default CSSModules(Table, tableStylesheet);
