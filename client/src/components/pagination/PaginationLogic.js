export const pageNumbers = totalPages =>
  [...Array(totalPages + 1).keys()].slice(1);
