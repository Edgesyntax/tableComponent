const filterTable = ({ cTableData, filter, filterable, columns }) => {
  // Get filter keys
  const filterKeys = Object.keys(filter);
  if (!filterKeys || !filterKeys.length) return cTableData;

  const filterMethod = (row) => {
    var match = true
    columns.map((column) => {
      var tableValue = (row[column.id] ? String(row[column.id]).toLowerCase().trim() : "");
      var fitlerValue = (filter[column.id] ? String(filter[column.id]).toLowerCase().trim() : "");

      // Convert boolean values
      if (typeof row[column.id] === "boolean" && row[column.id]) tableValue = "true";
      if (typeof row[column.id] === "boolean" && !row[column.id]) tableValue = "false";

      if (fitlerValue && !tableValue.includes(fitlerValue)) match = false;
    })
    if (match) return row;
  };

  return cTableData.filter(filterMethod);
};

export default filterTable;
