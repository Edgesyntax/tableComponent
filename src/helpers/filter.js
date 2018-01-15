const filterTable = ({ cTableData, filter, filterable, columns }) => {
  // Get filter keys
  const filterKeys = Object.keys(filter);
  if (!filterKeys || !filterKeys.length) return cTableData;
  const filterTable = [...cTableData]

  const filterMethod = (row) => {
    var match = true
    columns.map((column) => {
      const customFilter = column.filterMethod;
      const customFilterValue = filter[column.id];
      if (customFilter && customFilterValue) {
        const filtered = customFilter(row[column.id], customFilterValue);
        if (!filtered) match = false;
      }
      else {
        var tableValue = row[column.id];
        var fitlerValue = (filter[column.id] ? String(filter[column.id]).toLowerCase().trim() : "");

        // Apply accessor
        if (column.accessor) {
          var accessor = column.accessor(row)
          tableValue = String(accessor).toLowerCase().trim();
        }
        // Default value
        else tableValue = String(tableValue).toLowerCase().trim();

        // Convert boolean values
        if (typeof row[column.id] === "boolean" && row[column.id]) tableValue = "true";
        if (typeof row[column.id] === "boolean" && !row[column.id]) tableValue = "false";

        if (fitlerValue && !tableValue.includes(fitlerValue)) match = false;
      }
    })
    if (match) return row;
  };

  return filterTable.filter(filterMethod);
};

export default filterTable;
