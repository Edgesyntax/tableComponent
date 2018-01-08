const sortTable = ({ cTableData, sort, columns }) => {
  if (!sort) return cTableData;
  var sortMethod = (dataA, dataB) => {
    const _a = dataA, _b = dataB;
    var sortColumn = Object.keys(sort)[0]
    var sortDirection = Object.values(sort)[0]

    if (_a[sortColumn] && typeof _a[sortColumn] === "object" || _b[sortColumn] && _b[sortColumn] === "object") return;

    var a = (typeof _a[sortColumn] === "string" ? _a[sortColumn].toLowerCase() : _a[sortColumn]);
    var b = (typeof _b[sortColumn] === "string" ? _b[sortColumn].toLowerCase() : _b[sortColumn]);

    // Check sorting of undefined or null values
    if (_a[sortColumn] == null || _b[sortColumn] == null) a = String(a), b = String(b);

    if (sortDirection === "ASC") return a > b ? 1 : a < b ? -1 : 0;
    else if (sortDirection === "DES") return b > a ? 1 : b < a ? -1 : 0;
    else return 0;
  };


  const sortColumn = columns.filter((column) => column.id === sortColumn)[0];
  if (sortColumn && sortColumn.sortMethod) sortMethod = sortColumn.sortMethod;
  return cTableData.sort(sortMethod);
};

export default sortTable;
