const generateTableColumns = ({data}) => {
  if (!data || !data.length) return [];
  var tableColumns = [];
  var columnList = [];
  data.map((row) => {
    for (var variable in row) {
      var column = {id: variable, label: variable};
      if (columnList.indexOf(variable) === -1) {
        columnList.push(variable);
        tableColumns.push({id: variable, label: variable});
      }
    }
  });
  return tableColumns;
};

const validateColumns = (columns) => {
  const columnErrors = columns.filter((column) => {
    // Check column type
    if (typeof column !== "object") return Object.assign({},{_message: "Invalid column expected object", value: column});
    if (!column.id) return Object.assign({},{_message: "Missing id key", value: column});
  });
  if (columnErrors.length) {
    console.warn("Found invalid column prop. Table will bypass column prop and generate columns.", columnErrors);
    return false;
  }
  return true;
};

export default generateTableColumns;
export {validateColumns};
