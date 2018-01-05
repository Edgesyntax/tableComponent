const setPageSize = ({cTableData,pageSize, page}) => {
  const resetPage = page - 1
  if (!pageSize) return;
  // check if page
  if (resetPage > 0) {
    const currentPage = pageSize * resetPage;
    return cTableData.slice(currentPage, pageSize + currentPage);
  }
  return cTableData.slice(0,pageSize);
};

export default setPageSize;
