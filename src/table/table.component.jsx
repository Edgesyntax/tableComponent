// React Modules
import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

// Application Modules
import tableStylesheet from "./table.stylesheet.css";
import Tr from "./tr.component.jsx";
import Thead from "./thead.component.jsx";
import Tfoot from "./tfoot.component.jsx";
import Util from "../helpers/util.js";

class Table extends React.Component{
  constructor(props){
    super();
    this.state = {
      data: props.data || [],
      columns: props.columns || Util.generateTableColumns(props.data),
      sort: props.defaultSort,
      sortable: props.sortable || true,
      filter: props.defaultFilter,
      filterable: props.filterable || false,
      page: props.defaultPage || 1,
      pageSize: props.defaultPageSize || 25,
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
  // componentDidUpdate(prevProps, prevState){
  //   if (this.props.onStateChange) this.props.onStateChange(this.state)
  // }
  componentDidMount(){
    if (this.props.onStateChange) this.props.onStateChange(this.state)
  }
  componentWillUnmount(){
    document.removeEventListener('mousemove', this.onResizeAction)
    document.removeEventListener('mouseup', this.onResizeEnd)
    document.removeEventListener('mouseleave', this.onResizeEnd)
  }
  onSortAction(event) {
    var name = event.target.name;
    var state = {...this.state};
    var value = event.target.value;
    // Reset page
    state.page = 1;
    // Set action value
    state.sort = JSON.parse(value);
    if (this.props.onSortChange) this.props.onSortChange(state.sort) //{ [state.sort.column]: state.sort.direction}
    this.setState(state);
  }
  onFilterAction(event) {
    const name = event.target.name;
    var state = {...this.state };
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
    this.setState(state);
  }
  onPageSizeAction(event) {
    var name = event.target.name;
    var state = {...this.state};
    var value = event.target.value;
    // Reset page
    state.page = 1;
    // Set action value
    state.pageSize = parseInt(value);

    if (this.props.onPageSizeChange) this.props.onPageSizeChange(state.pageSize)
    this.setState(state);
  }
  onPaginateAction(event) {
    var name = event.target.name;
    var state = {...this.state};
    var value = event.target.value;

    if (state.page === parseInt(value)) return;
    // Set action value
    state.page = parseInt(value);
    if (this.props.onPageChange) this.props.onPageChange(state.page)
    this.setState(state);
  }
  onResizeStart(event, column){
    event.stopPropagation();
    var state = {...this.state};
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
    var state = {...this.state};
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
  onResizeEnd(){
    var state = {...this.state};
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
  renderTr(table){
    const { page, pageSize, columns} = this.state;
    const { activeRow, noDataText} = this.props;
    if (!table || !table.length) return (
      <main>
        <center className="tc-message-text">{noDataText ? noDataText : "No records found"}</center>
      </main>
    );
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
    const { data, sortable, sort, filterable, filter, pageSize, pageSizeOptions, page, columns, resize } = this.state;
    const { dynamicFooter, loadingText, height, loading, hideHeader, showIndex, selectable, count} = this.props;
    const { table, processedTable } = new Util(data, columns).filter(filter).sort(sort).limit(pageSize, page);
    
    return(
      <main className="table-component">
        <main className="tc-table" style={{height}}>
          {!hideHeader ?
            <Thead
              columns={columns}
              showIndex={showIndex}
              selectable={selectable}
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
            {this.renderTr(table)}
          </main>
          <Tfoot
            columns={columns}
            count={count || processedTable.length || 0}
            setPageSize={this.onPageSizeAction}
            page={page}
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
  defaultFilter: PropTypes.object,
  filterable: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  defaultSort: PropTypes.object,
  sortable: PropTypes.array,
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
  count: PropTypes.number,
  defaultPageSize: PropTypes.number,
  defaultPage: PropTypes.number,
  dynamicFooter: PropTypes.bool,
  noDataText: PropTypes.string
}

export default CSSModules(Table, tableStylesheet);
