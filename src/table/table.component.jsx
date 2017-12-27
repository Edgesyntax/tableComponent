// TODO: Fix td value string converting into object -> cause <td> {value} </td> instead of <td>{value}</td>

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
import sortTableAction   from "../helpers/sort.js";
import filterTableAction from "../helpers/filter.js";
import limitTableAction  from "../helpers/limit.js";

class Table extends React.Component{
  constructor(){
    super();
    this.state = {
      filter: null
    }
    this.onSortAction = this.onSortAction.bind(this);
    this.onFilterAction = this.onFilterAction.bind(this);
    this.onLimitAction = this.onLimitAction.bind(this);
    this.onPaginateAction = this.onPaginateAction.bind(this);
  }
  componentWillMount(){
    this.init(this.props);
  }
  componentWillReceiveProps(nextProps){
    this.init(nextProps);
  }
  init(props){
    var sortable,filterable,sort,limit,filter,page,table;
    // Assign user defined columns or generate columns
    this.columns = (props.columns && validateColumns(props.columns) ? props.columns : generateTableColumns(props));
    // Make all columns sortable if no user defined sortable array
    const columns = this.columns.map((column) => column.id)
    sortable  = (props.sortable ? props.sortable : columns);
    // Make all columns filterable if no user defined filterable array
    if(props.filterable && props.filterable.length) filterable = props.filterable
    else if (props.filterable) filterable = columns;
    // Assign default sort column or use state
    sort      = (this.state.sort ? this.state.sort : props.sort);
    // Assign default limit or show all data
    limit     = (this.state.limit ? this.state.limit : props.limit);
    // Assign user defined filter or use state filter
    filter    = (this.state.filter ? this.state.filter : props.filter);
    // Assign user defined page or use state page
    page      = (this.state.page ? this.state.page : props.page ? props.page : 1);

    // Check/Render child components
    this.childrenNodes = this.renderChildren(props);
    // Generate table data
    table = this.generateTableData({props, sort, limit, filter});
    // Set application state
    this.setState({sort, sortable, filterable, limit, filter, page, table});
  }
  generateTableData({props, dev, limit, filter, sort}){
    var data = props.data, activeRow = props.activeRow;

    if (!data || !data.length) var data = [];
    // Add child Tr nodes to table data
    var cTableData = data.concat(this.childrenNodes.tr);

    if (!cTableData) return;

    // Filter table data
    (this.props.dev ? console.time('Filtering table data') : null);
    if (filter ? cTableData = filterTableAction({cTableData, filter, filterable: this.state.filterable, columns: this.columns}) : null);
    (this.props.dev ? console.timeEnd('Filtering table data') : null);

    // Sort table data
    (this.props.dev ? console.time('Sorting table data') : null);
    if (sort ? cTableData = sortTableAction({ cTableData, sort, columns: this.columns }) : null);
    (this.props.dev ? console.timeEnd('Sorting table data') : null);

    // Set full table data
    this.fTableData = cTableData;

    // Limit table data
    (this.props.dev ? console.time('Limiting table data') : null);
    if (limit ? cTableData = limitTableAction({ cTableData, limit, page: this.state.page }) : null);
    (this.props.dev ? console.timeEnd('Limiting table data') : null);

    // Generate table data
    (this.props.dev ? console.time('Generating table data') : null);
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
    (this.props.dev ? console.timeEnd('Generating table data') : null);

    return tableData;
  }
  onSortAction(event) {
    var name = event.target.name;
    var state = this.state;
    var value = event.target.value;
    // Reset page
    state.page = 1;
    // Set action vale
    state.sort = JSON.parse(value);

    if (this.props.onSortChange) this.props.onSortChange(state.sort)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      limit: state.limit,
      filter: state.filter,
      sort: state.sort
    });
    this.setState(state);
  }
  onFilterAction(event) {
    const name = event.target.name;
    const state = this.state;
    const value = event.target.value;
    // Reset page
    state.page = 1;
    // Set filter vale
    state.filter = (state.filter ? Object.assign(state.filter, {[name]: value}) : {[name] : value});

    if (this.props.onFilterChange) this.props.onFilterChange(state.filter)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({ 
      props: this.props, 
      limit: state.limit,
      filter: state.filter,
      sort: state.sort 
    });
    this.setState(state);
  }
  onLimitAction(event) {
    var name = event.target.name;
    var state = this.state;
    var value = event.target.value;
    // Reset page
    state.page = 1;
    // Set action vale
    state.limit = parseInt(value);

    if (this.props.onLimitChange) this.props.onLimitChange(state.limit)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      limit: state.limit,
      filter: state.filter,
      sort: state.sort
    });
    this.setState(state);
  }
  onPaginateAction(event) {
    var name = event.target.name;
    var state = this.state;
    var value = event.target.value;

    if (state.page === parseInt(value)) return;
    // Set action vale
    state.page = parseInt(value);
    if (this.props.onPageChange) this.props.onPageChange(state.page)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      limit: state.limit,
      filter: state.filter,
      sort: state.sort
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
    const {table, page, limit} = this.state;
    if (!table || !table.length) return;
    return table.map((row, index) => {
      return <Tr
        key={index}
        row={row.data}
        index={(limit ? ((page - 1) * limit) + index : index)}
        showIndex={this.props.showIndex}
        activeRow={row._activeRow}/>
    })
  }
  renderTableBody(){
    const { table } = this.state;
    const {showIndex, noDataText } = this.props;
    
    if(table && table.length) return this.renderTr()
    return(
      <tr>
        <td colSpan={showIndex && this.columns ? this.columns.length + 1 : this.columns ? this.columns.length : 0} style={{ textAlign: "center" }}>
          <h3>{noDataText ? noDataText : "No records found."}</h3>
        </td>
      </tr>
    )
  }
  render(){
    const { table, sortable, sort, filterable, filter, limit, page } = this.state;
    const { hideHeader, showIndex, noDataText, pages, loading, loadingText} = this.props;
    return(
      <main className="tableComponent">
        <table>
          {!hideHeader ?
            <Thead
              columns={this.columns}
              showIndex={showIndex}
              filter={filter}
              filterable={filterable}
              filterTable={this.onFilterAction}
              sort={sort}
              sortable={sortable}
              sortTable={this.onSortAction}/>
          : null }
          <tbody>{this.renderTableBody()}</tbody>
          <Tfoot
            columns={this.columns}
            tableLength={pages || this.fTableData.length}
            limit={limit}
            limitTable={this.onLimitAction}
            page={page}
            paginateTable={this.onPaginateAction}
            showIndex={showIndex}/>
        </table>
          {loading ? <div className="loading">{loadingText ? loadingText : <h3>Loading...</h3>}</div> : null }
      </main>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  filter: PropTypes.object,
  filterable: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  sort: PropTypes.object,
  sortable: PropTypes.array,
  limit: PropTypes.number,
  // Events
  onSortChange: PropTypes.func,
  onFilterChange: PropTypes.func,
  onLimitChange: PropTypes.func,
  onPageChange: PropTypes.func,
  // Other Props
  showIndex: PropTypes.bool,
  activeRow: PropTypes.object,
  manual: PropTypes.bool,
  pages: PropTypes.number,
  page: PropTypes.number,
  dev: PropTypes.bool,
  noDataText: PropTypes.string
}

export default CSSModules(Table, tableStylesheet);
