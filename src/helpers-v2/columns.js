const generateTableColumns = ({data}) => {
  console.log("generating columns");
  if (!data || !data.length) return [];
  var tableColumns = [];
  data.map((row) => {
    for (var variable in row) {
      if (tableColumns.indexOf(variable) === -1) {
        tableColumns.push(variable);
      }
    }
  });
  return tableColumns;
};

export default generateTableColumns;
