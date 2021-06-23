import { useSelector } from "react-redux";
import { pageNumbers } from "./PaginationLogic";
import {
  PaginationBox,
  PaginationList,
  PageButton,
} from "./Pagination.styles.js";

const Pagination = ({ totalPages, paginate }) => {
  const { currentPage } = useSelector(state => state);
  console.log("currentPage", currentPage);
  return (
    <PaginationBox>
      <span>Current Page: <strong>{currentPage}</strong></span>
      <PaginationList>
        {pageNumbers(totalPages).map((number) => (
          <li key={number}>
            <PageButton onClick={() => paginate(number)}>{number}</PageButton>
          </li>
        ))}
      </PaginationList>
    </PaginationBox>
  );
};

export default Pagination;
