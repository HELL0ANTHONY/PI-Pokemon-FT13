import { connect } from "react-redux";
import { useKey } from "../../hooks/useKey";
import fetchPokemonByName from "../../redux/reducers/fetchPokemonByName";

import HomeLogic from "./HomeLogic";
import SearchModal from "../../components/modals/modalSearch/SearchModal";
import CardsWithPagination from "../../components/cardsWithPagination/CardsWithPagination";

// import { HomeStyles } from "./Home.styles.js";


const Home = ({ searchPokemonByName, pokemons }) => { 
  const { modalSearchAttributes } = HomeLogic();
  const { openModal, ...rest } = modalSearchAttributes();


  return (
    <>
      <CardsWithPagination />  
      
      <div className="search-btn btn-modal-position">
        <button type="submit" onClick={openModal} >
          <i className="fas fa-search" />
        </button>
      </div>
    </>
  ); 
};

const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

const mapDispatchToProps = dispatch => ({
  searchPokemonByName: string => dispatch(fetchPokemonByName(string))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/*
 *
        <button onClick={() => console.log("esto era para el filtro")}>
          <i className="fas fa-filter"></i>
        </button>
 *
 * */
