const limitTable = ({tableData,limit, page}) => {
  if (!limit) return;
  // check if page
  if (page > 0) {
    const currentPage = limit * page;
    return tableData.slice(currentPage, limit + currentPage);
  }
  return tableData.slice(0,limit);
};

export default limitTable;
