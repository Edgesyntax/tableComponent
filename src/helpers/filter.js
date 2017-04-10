// TODO: filter keys is filterable array
const filterTable = ({tableData, filter}) => {
  if (!filter) return tableData;
  return tableData.filter((row) => {
    var formatedRow = row.data.join("").toLowerCase();
    var filterValue = filter.toLowerCase().trim();
    return formatedRow.indexOf(filterValue) !== -1;
  });
};

export default filterTable;


// Add filterable metadata
// if (this.props.filterable) {
//   row = Object.assign({}, row, {_filterable: this.props.filterable});
// }
// console.log(row);
