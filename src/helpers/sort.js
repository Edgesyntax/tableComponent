const sortTable = ({cTableData, sort}) => {
  if (!sort) return cTableData;
  return cTableData.sort((dataA, dataB) => {
    const _a = dataA, _b = dataB;
    if (_a[sort.column] && typeof _a[sort.column] === "object" || _b[sort.column] && _b[sort.column] === "object") return;
    var a = (typeof _a[sort.column] === "string" ? _a[sort.column].toLowerCase() : _a[sort.column]);
    var b = (typeof _b[sort.column] === "string" ? _b[sort.column].toLowerCase() : _b[sort.column]);

    if(!a || !b) return;
    if (sort.direction === "ASC") return a > b ? 1 : a < b ? -1 : 0;
    else if (sort.direction === "DES") return b > a ? 1 : b < a ? -1 : 0;
    else return 0;
  });
};

export default sortTable;
