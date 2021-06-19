import { useEffect } from "react";
import { connect } from "react-redux";
import { useKey } from "../../hooks/useKey";
import fetchPokemonByName from "../../redux/reducers/fetchPokemonByName";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";
import { setSortBy, changeOrder, filterByType } from "../../redux/actions/actions";

import HomeLogic from "./HomeLogic";
import SearchModal from "../../components/modals/modalSearch/SearchModal";
import CardsWithPagination from "../../components/cardsWithPagination/CardsWithPagination";
import Select from "../../components/Select";

import { Selects } from "./Home.styles.js";

const Home = ({ 
  searchPokemonByName, 
  setCardsOrder,
  fetchTypes, 
  pokemonTypes,
  filterByType,
  changeOrder, 
  pokemons,
  sortBy, 
  filter,
  order
}) => { 
  const { modalSearchAttributes } = HomeLogic();
  const arrayOfTypes = pokemonTypes?.data?.map(({ name }) => name);

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

  const handleOrder = event => {
    event.preventDefault();
    changeOrder(event.target.value);
  };

  const handleSortOption = event => {
    event.preventDefault();
    setCardsOrder(event.target.value);
  };

  const handleFilter = event => {
    event.preventDefault();
    filterByType(event.target.value);
  };
  
  useEffect(() => {
    fetchTypes();
  }, [fetchTypes]);

  return (
    <>
      <CardsWithPagination />  
      
      <Selects>
        <span>Sort:
          <Select 
            initialValue={sortBy}
            onChange={handleSortOption}
            values={["default", "name", "force"]}
          />
        </span>
        
        <span>Order:
          <Select 
            initialValue={order}
            onChange={handleOrder}
            values={["asc", "desc"]}
          />
        </span>
        
        <span>Filter:
          {
           arrayOfTypes && <Select 
              initialValue={filter}
              onChange={handleFilter}
              values={["all", ...arrayOfTypes]}
            />
          }
        </span>
        
        <div>
          <button type="submit" onClick={openModal} >
            <i className="fas fa-search" />
          </button>
        </div>
      </Selects> 
      
      <SearchModal 
        value={pokemonName}
        closeModal={closeModalSearch}
        onSubmit={handleSearch}
        {...rest} 
      />
    </>
  ); 
};

const mapStateToProps = ({ pokemons, sortBy, order, pokemonTypes, filter }) => ({
  pokemonTypes,
  pokemons,
  sortBy,
  filter,
  order
});

const mapDispatchToProps = dispatch => ({
  searchPokemonByName: string => dispatch(fetchPokemonByName(string)),
  setCardsOrder: string => dispatch(setSortBy(string)),
  changeOrder: string => dispatch(changeOrder(string)),
  fetchTypes: () => dispatch(fetchPokemonTypes()),
  filterByType: type => dispatch(filterByType(type)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
