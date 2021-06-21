import { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { goToPage } from "../../redux/actions/actions";
import fetchPokemons from "../../redux/reducers/fetchPokemons";

import Pagination from "../pagination/Pagination";
import { printCards } from "../../helpers/printCards";
import { Cards } from "./CardsWithPagination.styles.js";

const CardsWithPagination = ({ fetchPokemons }) => {
  const { currentPage, pokemons, sortBy, order, filter } = useSelector(
    state => state
  );
  const totalPages = pokemons?.paginationData?.totalPages;

  const paginate = pageNumber => dispatch(goToPage(pageNumber));
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPokemons(
      `http://localhost:3001/pokemons?page=${currentPage}&sort=${sortBy}&order=${order}&filter=${filter}`
    );
  }, [fetchPokemons, currentPage, sortBy, filter, order]);

  const printPagination = _ => {
    return (
      totalPages &&
      totalPages > 1 && (
        <Pagination totalPages={totalPages} paginate={paginate} />
      )
    );
  };

  return (
    <>
      {printPagination()}
      <Cards>
        {!pokemons?.data ? (
          <h1>Loading...</h1>
        ) : !pokemons.data.length ? (
          <h1 className="no-pokemon">UPS! There is no such Pokemon</h1>
        ) : (
          printCards(pokemons.data)
        )}
      </Cards>
      {printPagination()}
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: (page, sort, order) =>
    dispatch(fetchPokemons(page, sort, order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsWithPagination);
