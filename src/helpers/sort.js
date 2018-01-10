const sortTable = ({ cTableData, sort, columns }) => {
  if (!sort) return cTableData;

  const sortColumn = Object.keys(sort)[0]
  const sortDirection = Object.values(sort)[0]
  const sortKey = columns.filter((column) => column.id === sortColumn)[0];

  var sortMethod = (dataA, dataB) => {
    var _a = dataA, _b = dataB;

    var a = (typeof _a[sortColumn] === "string" ? _a[sortColumn].toLowerCase() : _a[sortColumn]);
    var b = (typeof _b[sortColumn] === "string" ? _b[sortColumn].toLowerCase() : _b[sortColumn]);

    // Apply accessor
    if (sortKey && sortKey.accessor) {
      a = sortKey.accessor(a)
      b = sortKey.accessor(b)
    }

    // Check if sort datas are abjects
    if (a && typeof b === "object" || _b && _b === "object") return;

    // Check sorting of undefined or null values
    if (_a[sortColumn] == null || _b[sortColumn] == null) a = String(a), b = String(b);

    // Sort a and b
    if (sortDirection === "ASC") return a > b ? 1 : a < b ? -1 : 0;
    else if (sortDirection === "DES") return b > a ? 1 : b < a ? -1 : 0;
    else return 0;
  };

  // Check if custom sort method is available
  if (sortKey && sortKey.sortMethod) sortMethod = sortKey.sortMethod;

  return cTableData.sort(sortMethod);
};

export default sortTable;
