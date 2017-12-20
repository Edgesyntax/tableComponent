const filterTable = ({ cTableData, filter, filterable }) => {
  // Get filter keys
  const filterKeys = Object.keys(filter);
  if (!filterKeys || !filterKeys.length) return cTableData;

  var cTableDataFiltered = [];
  cTableData.map((row) => {
    var match = true
    if(!filterKeys || !filterKeys.length) return cTableDataFiltered = cTableDataFiltered.concat(row);
    for(var key in row){
      var tableValue = row[key] && String(row[key]).toLowerCase().trim();
      var fitlerValue = filter[key] && String(filter[key]).toLowerCase().trim();
      // Convert boolean values
      if (typeof tableValue === "boolean" && tableValue) tableValue = "true";
      if (typeof tableValue === "boolean" && !tableValue) tableValue = "false";

      if(fitlerValue && !tableValue.includes(fitlerValue)) match = false;
    }
    if (match) cTableDataFiltered = cTableDataFiltered.concat(row);
  });
  return cTableDataFiltered;
};

export default filterTable;
