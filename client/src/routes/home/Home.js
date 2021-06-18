import { connect } from "react-redux";
import { useKey } from "../../hooks/useKey";
import fetchPokemonByName from "../../redux/reducers/fetchPokemonByName";
import { setSortBy, changeOrder } from "../../redux/actions/actions";

import HomeLogic from "./HomeLogic";
import SearchModal from "../../components/modals/modalSearch/SearchModal";
import CardsWithPagination from "../../components/cardsWithPagination/CardsWithPagination";
import Select from "../../components/Select";

// import { HomeStyles } from "./Home.styles.js";
import "./home.css";

const Home = ({ searchPokemonByName, setCardsOrder, changeOrder, pokemons, sortBy, order }) => { 
  const { modalSearchAttributes } = HomeLogic();

  const { 
    openModal,
    closeModal: closeModalSearch,
    value: pokemonName,
    ...rest
  } = modalSearchAttributes();

  const handleSearch = event => {
    const name = pokemonName.trim();
    if (name) {
      event.preventDefault();
      searchPokemonByName(name.toLowerCase());
      closeModalSearch(event);
    } 
    else closeModalSearch(event);
  };
  useKey("Enter", handleSearch);

// Botones/Opciones para ordenar tanto ascendentemente 
  //como descendentemente los pokemons por orden alfabético y por fuerza
  // http://localhost:3001/pokemons?page=1&sort=name&order=asc
changeOrder("desc")
console.log({order});

  const handleSortOption = event => {
    event.preventDefault();
    setCardsOrder(event.target.value);
  };
  
  return (
    <>
      <Select 
        initialValue={sortBy}
        onChange={handleSortOption}
        values={["default", "name", "force"]}
      />
      
      <CardsWithPagination />  
      
      <SearchModal 
        value={pokemonName}
        closeModal={closeModalSearch}
        onSubmit={handleSearch}
        {...rest} 
      />
      
      <div className="search-btn btn-modal-position">
        <button type="submit" onClick={openModal} >
          <i className="fas fa-search" />
        </button>
      </div>
    </>
  ); 
};

const mapStateToProps = ({ pokemons, sortBy, order }) => ({
  pokemons,
  sortBy,
  order
});

const mapDispatchToProps = dispatch => ({
  searchPokemonByName: string => dispatch(fetchPokemonByName(string)),
  setCardsOrder: string => dispatch(setSortBy(string)),
  changeOrder: string => dispatch(changeOrder(string))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
