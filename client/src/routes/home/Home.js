import { useEffect } from "react"; 
import { connect } from "react-redux";
import fetchPokemons from "../../redux/reducers/fetchPokemons";
import { goToPage } from "../../redux/actions/actions";

import { HomeStyles } from "./Home.styles.js";
import { printCards } from "../../helpers/printCards";
import Pagination from "../../components/pagination/Pagination"; 

const Home = ({ fetchPokemons, goToPage, pokemons, currentPage }) => { 
  const totalPages = pokemons?.paginationData.totalPages;
  const paginate   = pageNumber => goToPage(pageNumber);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [fetchPokemons, currentPage]); 

  return (
    <>
      {totalPages && <Pagination totalPages={totalPages} paginate={paginate} />}
      <HomeStyles>
        {
          pokemons?.data 
            ? printCards(pokemons.data) 
            : <h1>Loading...</h1>
        }
      </HomeStyles>
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
  goToPage: number => dispatch(goToPage(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
