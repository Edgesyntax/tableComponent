const genrateTableColumns = ({data}) => {
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

export default genrateTableColumns;
