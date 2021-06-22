import {
  SORT_BY,
  GO_TO_PAGE,
  FETCH_ERROR,
  CHANGE_ORDER,
  FILTER_FOR_DB,
  CLEAN_DETAILS,
  FETCH_PENDING,
  FETCH_POKEMONS,
  FILTER_BY_TYPE,
  CREATE_NEW_POKEMON,
  FETCH_POKEMON_BY_ID,
  FETCH_POKEMON_TYPES,
  FETCH_POKEMON_BY_NAME,
} from "../constants";

const initialState = {
  error: null,
  order: "asc",
  filter: "all",
  sortBy: "default",
  pending: false,
  kemons: undefined,
  newPokemon: undefined,
  currentPage: 1,
  pokemonById: undefined,
  pokemonTypes: undefined,
  pokemonsFrom: "all",
};

const pokeByName = (array, name) => {
  const pokemons = array.filter(
    pokemon => pokemon.name.toLowerCase() === name.toLowerCase()
  );
  return { data: pokemons };
};

export function rootReducer(state = initialState, { type, payload, error }) {
  switch (type) {
    case FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: error,
      };
    case FETCH_POKEMONS:
      return {
        ...state,
        pending: false,
        pokemons: payload,
      };
    case FETCH_POKEMON_BY_ID:
      return {
        ...state,
        pending: false,
        pokemonById: payload,
      };
    case CLEAN_DETAILS:
      return {
        ...state,
        pokemonById: payload,
      };
    case CREATE_NEW_POKEMON:
      return {
        ...state,
        pending: false,
        newPokemon: payload,
      };
    case FETCH_POKEMON_TYPES:
      return {
        ...state,
        pending: false,
        pokemonTypes: payload,
      };
    case GO_TO_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case FETCH_POKEMON_BY_NAME:
      return {
        ...state,
        pending: false,
        pokemons: pokeByName(payload.json.data, payload.name),
      };
    case SORT_BY:
      return {
        ...state,
        sortBy: payload,
      };
    case CHANGE_ORDER:
      return {
        ...state,
        order: payload,
      };
    case FILTER_BY_TYPE:
      return {
        ...state,
        filter: payload,
      };
    case FILTER_FOR_DB:
      return {
        ...state,
        pokemonsFrom: payload,
      };
    default:
      return state;
  }
}
