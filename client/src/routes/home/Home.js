import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useKey } from "../../hooks/useKey";
import fetchPokemonByName from "../../redux/reducers/fetchPokemonByName";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";

import { HomeLogic } from "./HomeLogic";
import SearchModal from "../../components/modals/modalSearch/SearchModal";
import CardsWithPagination from "../../components/cardsWithPagination/CardsWithPagination";
import Select from "../../components/Select";
import { Selects } from "./Home.styles.js";

const Home = () => { 
  const { 
    modalSearchAttributes, 
    handleFilter,
    handleOrder,
    handleSortOption 
  } = HomeLogic();

  const { sortBy, filter, order, pokemonTypes } = useSelector(state => state);
  const arrayOfTypes = pokemonTypes?.data?.map(({ name }) => name);
  const dispatch = useDispatch();

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
      dispatch(fetchPokemonByName(name.toLowerCase()));
      closeModalSearch(event);
    } 
    else closeModalSearch(event);
  };
  useKey("Enter", handleSearch);
  
  useEffect(() => {
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

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

export default Home;
