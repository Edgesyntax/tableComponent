// TODO: filter keys is filterable array
const filterTable = ({tableData,filter}) => {
  if (!filter) return tableData;
  return tableData.filter((row) => {
    var formatedRow = row.join("").toLowerCase();
    return formatedRow.indexOf(filter.toLowerCase()) !== -1;
  });
};

export default filterTable;
