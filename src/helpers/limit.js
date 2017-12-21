const limitTable = ({cTableData,limit, page}) => {
  const resetPage = page - 1
  if (!limit) return;
  // check if page
  if (resetPage > 0) {
    const currentPage = limit * resetPage;
    return cTableData.slice(currentPage, limit + currentPage);
  }
  return cTableData.slice(0,limit);
};

export default limitTable;
