import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useKey } from "../../hooks/useKey";
import fetchPokemonByName from "../../redux/reducers/fetchPokemonByName";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";

import { HomeLogic } from "./HomeLogic";
import SearchModal from "../../components/modals/modalSearch/SearchModal";
import CardsWithPagination from "../../components/cardsWithPagination/CardsWithPagination";
import Select from "../../components/select/Select";
import { Selects } from "./Home.styles.js";
import SearchResult from "../../components/searchResult/SearchResult";

const Home = () => {
  const {
    modalSearchAttributes,
    handleFilter,
    selectAttributes,
  } = HomeLogic();

  const { filter, pokemonTypes } = useSelector(
    state => state
  );
  const arrayOfTypes = pokemonTypes?.data?.map(({ name }) => name);
  const dispatch = useDispatch();

  const {
    openModal,
    closeModal: closeModalSearch,
    value: pokemonName,
    ...rest
  } = modalSearchAttributes();

  const handleSearch = event => {
    event.preventDefault();
    const name = pokemonName.trim();
    if (name) {
      dispatch(fetchPokemonByName(name.toLowerCase()));
      closeModalSearch(event);
    } else closeModalSearch(event);
  };
  useKey("Enter", handleSearch);

  useEffect(() => {
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

  return (
    <>
      <SearchResult />
      <CardsWithPagination />
      <Selects>
        {selectAttributes().map(({ id, title, ...rest }) => (
          <span key={id}>
            {title}
            <Select {...rest} />
          </span>
        ))}
        <span>
          Filter:
          {arrayOfTypes && (
            <Select
              initialValue={filter}
              onChange={handleFilter}
              values={["all", ...arrayOfTypes]}
            />
          )}
        </span>
        <div>
          <button type="submit" onClick={openModal}>
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