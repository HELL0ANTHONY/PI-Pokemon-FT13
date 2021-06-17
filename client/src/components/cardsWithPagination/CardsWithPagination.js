import { useEffect } from "react"; 
import { connect } from "react-redux";
import { goToPage } from "../../redux/actions/actions";
import fetchPokemons from "../../redux/reducers/fetchPokemons";

import Pagination from "../pagination/Pagination"; 
import { printCards } from "../../helpers/printCards";
import { Cards } from "./CardsWithPagination.styles.js";

const CardsWithPagination = ({ fetchPokemons, goToPage, pokemons, currentPage }) => {
  const totalPages = pokemons?.paginationData?.totalPages;
  const paginate   = pageNumber => goToPage(pageNumber);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [fetchPokemons, currentPage]); 

  return (
    <>
      {totalPages && <Pagination totalPages={totalPages} paginate={paginate} />}
      <Cards>
        {
          pokemons?.data 
            ? printCards(pokemons.data) 
            : <h1>Loading...</h1>
        }
      </Cards>
      {totalPages && <Pagination totalPages={totalPages} paginate={paginate} />}
    </>
  );
};

const mapStateToProps = ({ pokemons, currentPage }) => ({
  currentPage,
  pokemons
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: (page, sort, order) => dispatch(fetchPokemons(page, sort, order)),
  goToPage: number => dispatch(goToPage(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsWithPagination);
