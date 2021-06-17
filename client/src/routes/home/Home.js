import { useEffect } from "react"; 
import { connect } from "react-redux";
import fetchPokemons from "../../redux/reducers/fetchPokemons";
import fetchPokemonByName from "../../redux/reducers/fetchPokemonByName";
import { goToPage } from "../../redux/actions/actions";
import { useKey } from "../../hooks/useKey";

import HomeLogic from "./HomeLogic";
import { printCards } from "../../helpers/printCards";
import Pagination from "../../components/pagination/Pagination"; 
import SearchModal from "../../components/modals/modalSearch/SearchModal";
import { HomeStyles } from "./Home.styles.js";

const Home = ({ fetchPokemons, goToPage, searchPokemonByName, pokemons, currentPage }) => { 
  const { modalSearchAttributes } = HomeLogic();
  const { openModal, ...rest } = modalSearchAttributes();
  const totalPages = pokemons?.paginationData?.totalPages;
  const paginate   = pageNumber => goToPage(pageNumber);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [fetchPokemons, currentPage]); 

  // llevar toda la logica de lo que esta en HomeStyles y el paginado a otro archivo
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
      
      <div className="search-btn btn-modal-position">
        <button type="submit" onClick={openModal} >
          <i className="fas fa-search" />
        </button>
        <button onClick={() => console.log("esto era para el filtro")}>
          <i className="fas fa-filter"></i>
        </button>
      </div>
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
  searchPokemonByName: string => dispatch(fetchPokemonByName(string))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
