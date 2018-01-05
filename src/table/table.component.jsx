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
import setPageSizeAction  from "../helpers/limit.js";

class Table extends React.Component{
  constructor(){
    super();
    this.state = {
      filter: null
    }
    this.onSortAction = this.onSortAction.bind(this);
    this.onFilterAction = this.onFilterAction.bind(this);
    this.onPageSizeAction = this.onPageSizeAction.bind(this);
    this.onPaginateAction = this.onPaginateAction.bind(this);
  }
  componentWillMount(){
    this.init(this.props);
  }
  componentWillReceiveProps(nextProps){
    this.init(nextProps);
  }
  init(props){
    var sortable,filterable,sort,pageSize,filter,page,table;
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
    // Assign default pageSize or show all data
    pageSize     = (this.state.pageSize ? this.state.pageSize : props.pageSize);
    // Assign user defined filter or use state filter
    filter    = (this.state.filter ? this.state.filter : props.filter);
    // Assign user defined page or use state page
    page      = (this.state.page ? this.state.page : props.page ? props.page : 1);
    // Generate table data
    table = this.generateTableData({props, sort, pageSize, filter});
    // Set application state
    this.setState({sort, sortable, filterable, pageSize, filter, page, table});
  }
  generateTableData({props, dev, pageSize, filter, sort}){
    // Generate table data
    (this.props.dev ? console.time('Generating table data') : null);
    var cTableData = props.data, activeRow = props.activeRow;
    this.fTableData = []
    
    if (!cTableData || !cTableData.length) return;

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

    // Set table page size
    (this.props.dev ? console.time('Setting page size') : null);
    if (pageSize ? cTableData = setPageSizeAction({ cTableData, pageSize, page: this.state.page }) : null);
    (this.props.dev ? console.timeEnd('Setting page size') : null);

    (this.props.dev ? console.timeEnd('Generating table data') : null);

    return cTableData;
  }
  onSortAction(event) {
    var name = event.target.name;
    var state = this.state;
    var value = event.target.value;
    // Reset page
    state.page = 1;
    // Set action value
    state.sort = JSON.parse(value);

    if (this.props.onSortChange) this.props.onSortChange(state.sort)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      pageSize: state.pageSize,
      filter: state.filter,
      sort: state.sort
    });
    this.setState(state);
  }
  onFilterAction(event) {
    const name = event.target.name;
    const state = this.state;
    const value = (event.target.value ? event.target.value : undefined);
    // Reset page
    state.page = 1;
    // Set filter value
    state.filter = (state.filter ? Object.assign({},state.filter, {[name]: value}) : {[name] : value});

    if (this.props.onFilterChange) this.props.onFilterChange(state.filter)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({ 
      props: this.props, 
      pageSize: state.pageSize,
      filter: state.filter,
      sort: state.sort 
    });
    this.setState(state);
  }
  onPageSizeAction(event) {
    var name = event.target.name;
    var state = this.state;
    var value = event.target.value;
    // Reset page
    state.page = 1;
    // Set action value
    state.pageSize = parseInt(value);

    if (this.props.onPageSizeChange) this.props.onPageSizeChange(state.pageSize)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      pageSize: state.pageSize,
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
    // Set action value
    state.page = parseInt(value);
    if (this.props.onPageChange) this.props.onPageChange(state.page)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      pageSize: state.pageSize,
      filter: state.filter,
      sort: state.sort
    });
    this.setState(state);
  }
  renderTr(){
    const {table, page, pageSize} = this.state;
    const {activeRow} = this.props;
    if (!table || !table.length) return;
    return table.map((row, index) => {
      const hasActiveRow = activeRow && activeRow.id && activeRow.value;
      const activeRowValue = hasActiveRow && row[activeRow.id];
      const isActiveRow = hasActiveRow && activeRow.value === activeRowValue;
      return <Tr
        columns={this.columns}
        key={index}
        row={row}
        index={(pageSize ? ((page - 1) * pageSize) + index : index)}
        showIndex={this.props.showIndex}
        activeRow={isActiveRow}/>
    })
  }
  renderLoading() {
    const { showIndex, loadingText } = this.props;
    return (
      <tr>
        <td colSpan={showIndex && this.columns ? this.columns.length + 1 : this.columns ? this.columns.length : 0} style={{ textAlign: "center" }}>
          <h3>{loadingText ? loadingText : <h3>Loading...</h3>}</h3>
        </td>
      </tr>
    )
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
    const { table, sortable, sort, filterable, filter, pageSize, page } = this.state;
    const { hideHeader, showIndex, noDataText, pages, loading} = this.props;
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
          {loading ? <tbody className="loading">{this.renderLoading()}</tbody> : null}
          <tbody>{this.renderTableBody()}</tbody>
          <Tfoot
            columns={this.columns}
            tableLength={pages || this.fTableData.length}
            pageSize={pageSize}
            setPageSize={this.onPageSizeAction}
            page={page}
            paginateTable={this.onPaginateAction}
            showIndex={showIndex}/>
        </table>
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
  pageSize: PropTypes.number,
  // Events
  onSortChange: PropTypes.func,
  onFilterChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
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
