const sortTable = ({cTableData, sort, columns}) => {
  if (!sort) return cTableData;
  var sortMethod = (dataA, dataB) => {
    const _a = dataA, _b = dataB;
    if (_a[sort.column] && typeof _a[sort.column] === "object" || _b[sort.column] && _b[sort.column] === "object") return;

    var a = (typeof _a[sort.column] === "string" ? _a[sort.column].toLowerCase() : _a[sort.column]);
    var b = (typeof _b[sort.column] === "string" ? _b[sort.column].toLowerCase() : _b[sort.column]);

    // Check sorting of undefined or null values
    if (_a[sort.column] == null || _b[sort.column] == null) a = String(a), b = String(b);

    if (sort.direction === "ASC") return a > b ? 1 : a < b ? -1 : 0;
    else if (sort.direction === "DES") return b > a ? 1 : b < a ? -1 : 0;
    else return 0;
  };

  
  const sortColumn = columns.filter((column) => column.id === sort.column)[0];
  if (sortColumn && sortColumn.sortMethod) sortMethod = sortColumn.sortMethod;
  return cTableData.sort(sortMethod);
};

export default sortTable;
