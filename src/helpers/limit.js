const limitTable = ({tableData,limit, pagination}) => {
  if (!limit) return;
  // check if pagination
  if (pagination > 0) {
    const page = limit * pagination;
    return tableData.slice(page, limit + page);
  }
  return tableData.slice(0,limit);
};

export default limitTable;
