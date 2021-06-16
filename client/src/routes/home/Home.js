import { useEffect, useState } from "react"; 
import { connect } from "react-redux";
import fetchPokemons from "../../redux/reducers/fetchPokemons";

import { HomeStyles } from "./Home.styles.js";
import { printCards } from "../../helpers/printCards";
import Pagination from "../../components/pagination/Pagination";

import "./home.css";

const Home = ({ fetchPokemons, pokemons }) => { 
  const totalPages = pokemons?.paginationData.totalPages;
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);

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

const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: (page, sort, order) => dispatch(fetchPokemons(page, sort, order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
