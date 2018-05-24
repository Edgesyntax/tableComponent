// TODO: store active and selected tables in state;
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
      page: 1,
      pageSize: 25,
      pageSizeOptions: [25, 50, 100]
    }
    this.onSortAction     = this.onSortAction.bind(this);
    this.onFilterAction   = this.onFilterAction.bind(this);
    this.onPageSizeAction = this.onPageSizeAction.bind(this);
    this.onPaginateAction = this.onPaginateAction.bind(this);
    this.onResizeStart    = this.onResizeStart.bind(this);
    this.onResizeEnd      = this.onResizeEnd.bind(this);
    this.onResizeAction   = this.onResizeAction.bind(this);
    this.selectAllRows    = this.selectAllRows.bind(this);
    this.selectRow        = this.selectRow.bind(this);
  }
  componentWillMount(){
    this.init(this.props);
  }
  componentWillReceiveProps(nextProps){
    this.init(nextProps);
  }
  componentWillUnmount(){
    document.removeEventListener('mousemove', this.onResizeAction)
    document.removeEventListener('mouseup', this.onResizeEnd)
    document.removeEventListener('mouseleave', this.onResizeEnd)
  }
  init(props){
    var sortable,filterable,sort,pageSize,filter,page,pages,table;
    // Assign user defined columns or generate columns
    const columns = (this.state.columns ? this.state.columns : props.columns && validateColumns(props.columns) ? props.columns : generateTableColumns(props));
    // Make all columns sortable if no user defined sortable array
    const columnIds = columns.map((column) => column.id);

    sortable  = (props.sortable ? props.sortable : columnIds);
    // Make all columns filterable if no user defined filterable array
    if(props.filterable && props.filterable.length) filterable = props.filterable
    else if (props.filterable) filterable = columnIds;
    // Assign default sort column or use state
    sort      = (this.state.sort ? this.state.sort : props.sort);
    // Assign default pageSize or show all data
    pageSize     = (this.state.pageSize ? this.state.pageSize : props.pageSize);
    // Assign user defined filter or use state filter
    filter    = (this.state.filter ? this.state.filter : props.filter);
    // Assign user defined page or use state page
    page      = (this.state.page ? this.state.page : props.page);
    // Assign user defined pages or use state pages
    pages     = (props.pages ? props.pages : props.data && props.data.length ?  Math.ceil(props.data.length / pageSize) : 1);
    // Generate table data
    table = this.generateTableData({props, sort, pageSize, filter, columns});
    // Set application state
    this.setState({sort, sortable, filterable, pageSize, filter, page, pages, table, columns});
  }
  generateTableData({props, dev, pageSize, filter, sort, columns}){
    // Generate table data
    (this.props.dev ? console.time('Generating table data') : null);
    var cTableData = props.data, activeRow = props.activeRow;
    this.fTableData = []
    
    if (!cTableData || !cTableData.length) return;

    // Filter table data
    (this.props.dev ? console.time('Filtering table data') : null);
    if (filter ? cTableData = filterTableAction({cTableData, filter, filterable: this.state.filterable, columns}) : null);
    (this.props.dev ? console.timeEnd('Filtering table data') : null);

    // Sort table data
    (this.props.dev ? console.time('Sorting table data') : null);
    if (sort ? cTableData = sortTableAction({ cTableData, sort, columns }) : null);
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

    if (this.props.onSortChange) this.props.onSortChange(state.sort) //{ [state.sort.column]: state.sort.direction}
    if (this.props.onStateChange) this.props.onStateChange(state)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      pageSize: state.pageSize,
      filter: state.filter,
      sort: state.sort,
      columns: state.columns
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
    if (state.filter && value) state.filter = Object.assign({}, state.filter, { [name]: value })
    else if (state.filter && !value) { 
      delete state.filter[name]
      state.filter = Object.assign({}, state.filter)
    }
    else state.filter = { [name]: value };

    if (this.props.onFilterChange) this.props.onFilterChange(state.filter)
    if (this.props.onStateChange) this.props.onStateChange(state)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({ 
      props: this.props, 
      pageSize: state.pageSize,
      filter: state.filter,
      sort: state.sort,
      columns: state.columns 
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
    if (this.props.onStateChange) this.props.onStateChange(state)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      pageSize: state.pageSize,
      filter: state.filter,
      sort: state.sort,
      columns: state.columns
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
    if (this.props.onStateChange) this.props.onStateChange(state)
    if (this.props.manual) return;
    // Generate table
    state.table = this.generateTableData({
      props: this.props,
      pageSize: state.pageSize,
      filter: state.filter,
      sort: state.sort,
      columns: state.columns
    });
    this.setState(state);
  }
  onResizeStart(event, column){
    event.stopPropagation();
    var state = this.state;
    const parentWidth = event.target.parentElement.getBoundingClientRect().width;
    const pageX = event.pageX;

    state.resize = {
      column,
      startX: pageX,
      parentWidth
    };
    this.setState(state, () => {
      document.addEventListener('mousemove', this.onResizeAction)
      document.addEventListener('mouseup', this.onResizeEnd)
      document.addEventListener('mouseleave', this.onResizeEnd)
    })
  }
  onResizeAction(event){
    var state = this.state;
    const pageX = event.pageX;
    var { column, parentWidth, startX } = state.resize;
    
    const width = Math.max(parentWidth + pageX - startX, 13);
    state.columns = state.columns.map((currentColumn) => {
      if(currentColumn.id === column) {
        currentColumn.width = width;
        currentColumn.maxWidth = width;
      }
      return currentColumn
    })
    this.setState(state);
  }
  onResizeEnd(event){
    var state = this.state;
    state.resize = false;
    this.setState(state, () => {
      document.removeEventListener('mousemove', this.onResizeAction)
      document.removeEventListener('mouseup', this.onResizeEnd)
      document.removeEventListener('mouseleave', this.onResizeEnd)
    })
  }
  selectAllRows() {
    if (this.props.onSelectAllRows) this.props.onSelectAllRows(this.state.table)
  }
  selectRow(row){
    if(this.props.onRowSelection) this.props.onRowSelection(row)
  }
  renderTr(){
    const {table, page, pageSize, columns} = this.state;
    const {activeRow} = this.props;
    if (!table || !table.length) return;
    return table.map((row, index) => {
      const hasActiveRow = activeRow && activeRow.id && activeRow.value;
      const activeRowValue = hasActiveRow && row[activeRow.id];
      const isActiveRow = hasActiveRow && activeRow.value === activeRowValue;
      return <Tr
        columns={columns}
        key={index}
        row={row}
        index={(pageSize ? ((page - 1) * pageSize) + index : index)}
        showIndex={this.props.showIndex}
        selectable={this.props.selectable}
        selectRow={this.selectRow}
        activeRow={isActiveRow}/>
    })
  }
  render(){
    const { table, sortable, sort, filterable, filter, pageSize, pageSizeOptions, page, pages, columns, resize } = this.state;
    const { hideHeader, showIndex, noDataText, loading, height, loadingText, dynamicFooter} = this.props;
    return(
      <main className="table-component">
        <main className="tc-table" style={{height}}>
          {!hideHeader ?
            <Thead
              columns={columns}
              showIndex={showIndex}
              selectable={this.props.selectable}
              filter={filter}
              filterable={filterable}
              filterTable={this.onFilterAction}
              sort={sort}
              sortable={sortable}
              sortTable={this.onSortAction}
              onResizeStart={this.onResizeStart}
              onResizeEnd={this.onResizeEnd}
              resizeTable={this.onResizeAction}
              resize={resize}
              height={height}
              selectAllRows={this.selectAllRows}/>
          : null }
          <main className="tc-tbody" style={height && {overflowY: "scroll"}}>
            {loading ?
              <main className="tc-overlay">
                <div className="tc-message-text">{loadingText ? loadingText : "Loading..."}</div>
              </main> 
            : null }
            {!table || !table.length ?
              <main>
                <center className="tc-message-text">{noDataText ? noDataText : "No records found"}</center>
              </main>
              : null}
            {this.renderTr()}
          </main>
          <Tfoot
            columns={columns}
            tableLength={this.fTableData.length}
            setPageSize={this.onPageSizeAction}
            page={page}
            pages={pages}
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
            paginateTable={this.onPaginateAction}
            dynamicFooter={dynamicFooter}/>
        </main>
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
  onSelectAllRows: PropTypes.func,
  onRowSelection: PropTypes.func,
  // Other Props
  showIndex: PropTypes.bool,
  activeRow: PropTypes.object,
  manual: PropTypes.bool,
  pages: PropTypes.number,
  page: PropTypes.number,
  dev: PropTypes.bool, 
  dynamicFooter: PropTypes.bool,
  noDataText: PropTypes.string
}

export default CSSModules(Table, tableStylesheet);
