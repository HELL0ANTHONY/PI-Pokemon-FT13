import { pageNumbers } from "./PaginationLogic";
import {
  PaginationBox,
  PaginationList,
  PageButton,
} from "./Pagination.styles.js";

const Pagination = ({ totalPages, paginate }) => {
  return (
    <PaginationBox>
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
