class Util {
  constructor(data, columns, manual){
    this.table = data || [];
    this.columns = columns;
    this.manual = manual;
  }
  filter(filter){
    if (!filter || !this.columns || this.manual) return this;
    // Get filter keys
    const filterKeys = Object.keys(filter);
    if (!filterKeys || !filterKeys.length || !this.columns) return this;

    const filterMethod = (row) => {
      var match = true
      this.columns.map((column) => {
        const customFilter = column.filterMethod;
        const customFilterValue = filter[column.id];
        if (customFilter && customFilterValue) {
          var tableValue = row[column.id];

          // Apply accessor
          if (column.accessor) {
            var accessor = column.accessor(row);
            switch (typeof accessor) {
              case "object":
                tableValue = accessor;
                break;
              default:
                tableValue = String(accessor).toLowerCase().trim();
                break;
            }
          }
          const filtered = customFilter(tableValue, customFilterValue);
          if (!filtered) match = false;
        } else {
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

    this.table = this.table.filter(filterMethod);
    return this
  }
  sort(sort){
    if (!sort || !this.columns || this.manual) return this;

    const sortColumn = Object.keys(sort)[0]
    var sortDirection = Object.values(sort)[0]
    const sortKey = this.columns.filter((column) => column.id === sortColumn)[0];

    var sortMethod = (dataA, dataB) => {
      var _a = dataA,
        _b = dataB;

      // Apply accessor
      if (sortColumn && sortKey && sortKey.accessor) {
        var a = sortKey.accessor(_a)
        var b = sortKey.accessor(_b)

        a = (typeof a === "string" ? a.toLowerCase() : a);
        b = (typeof b === "string" ? b.toLowerCase() : b);
      } else {
        var a = (typeof _a[sortColumn] === "string" ? _a[sortColumn].toLowerCase() : _a[sortColumn]);
        var b = (typeof _b[sortColumn] === "string" ? _b[sortColumn].toLowerCase() : _b[sortColumn]);
      }

      // Check if sort datas are abjects
      if (a && typeof a === "object" || b && typeof b === "object") return;

      // Check sorting of undefined or null values
      if (a == null || b == null) a = String(a), b = String(b);

      // Sort a and b
      switch (sortDirection) {
        case "ASC":
          sortDirection = 1
          break;
        case "DES":
          sortDirection = -1
          break;
      }
      if (sortDirection === 1) return a > b ? 1 : a < b ? -1 : 0;
      else if (sortDirection === -1) return b > a ? 1 : b < a ? -1 : 0;
      else return 0;
    };

    // Check if custom sort method is available
    if (sortKey && sortKey.sortMethod) this.table = this.table.sort(sortKey.sortMethod)
    else this.table = this.table.sort(sortMethod);
    return this
  }
  limit(pageSize, page) {
    this.processedTable = this.table;
    if (!pageSize || !page) return this;

    const resetPage = page - 1
    // check if page
    if (!this.manual && resetPage > 0) {
      const currentPage = pageSize * resetPage;
      this.table = this.table.slice(currentPage, pageSize + currentPage);
      return this;
    }
    this.table = this.table.slice(0, pageSize);
    return this
  }
  static generateTableColumns(data){
    if (!data || !data.length) return [];
    var tableColumns = [];
    var columnList = [];
    data.map((row) => {
      for (var variable in row) {
        var column = {id: variable, label: variable};
        if (!columnList.includes(variable)) {
          columnList.push(variable);
          tableColumns.push(column);
        }
      }
    });
    return tableColumns;
  }
}

export default Util;