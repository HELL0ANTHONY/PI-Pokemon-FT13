function pagination(page, limit, array) {
  const startIndex    = (page - 1) * limit;
  const endIndex      = page * limit;
  const rowsTotal     = array.length;
  const totalPages    = Math.ceil(rowsTotal / limit);
  let next = previous = null;

  if (endIndex < rowsTotal) next = page + 1;
  if (startIndex > 0) previous = page - 1;

  return {
    startIndex,
    endIndex,
    rowsTotal,
    totalPages,
    limit,
    next,
    previous
  };
}

module.exports = pagination;
