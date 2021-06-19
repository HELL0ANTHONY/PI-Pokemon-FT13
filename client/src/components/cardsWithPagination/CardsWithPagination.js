import { useEffect } from "react"; 
import { connect } from "react-redux";
import { goToPage } from "../../redux/actions/actions";
import fetchPokemons from "../../redux/reducers/fetchPokemons";

import Pagination from "../pagination/Pagination"; 
import { printCards } from "../../helpers/printCards";
import { Cards } from "./CardsWithPagination.styles.js";

const CardsWithPagination = ({ fetchPokemons, goToPage, pokemons, currentPage, sortBy, order, filter }) => {
  const totalPages = pokemons?.paginationData?.totalPages;
  const paginate   = pageNumber => goToPage(pageNumber);

  useEffect(() => {
    fetchPokemons(`http://localhost:3001/pokemons?page=${currentPage}&sort=${sortBy}&order=${order}&filter=${filter}`);
  }, [fetchPokemons, currentPage, sortBy, filter, order]); 

  const printPagination = _ => { 
    return (totalPages && totalPages > 1) 
      && <Pagination totalPages={totalPages} paginate={paginate} />
  };

  return (
    <>
      {printPagination()}
        <Cards>
          {
            !pokemons?.data 
              ? <h1>Loading...</h1>
              : !pokemons.data.length
                ? <h1>Empty</h1>
                : printCards(pokemons.data) 
          }
        </Cards>
      {printPagination()}
    </>
  );
};

const mapStateToProps = ({ pokemons, currentPage, sortBy, order, filter }) => ({
  currentPage,
  pokemons,
  sortBy,
  order,
  filter
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: (page, sort, order) => dispatch(fetchPokemons(page, sort, order)),
  goToPage: number => dispatch(goToPage(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsWithPagination);
