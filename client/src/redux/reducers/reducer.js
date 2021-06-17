import {
  /*  SORT,
  CHANGE_PAGE,
  CHANGE_ORDER, */
  GO_TO_PAGE,
  FETCH_ERROR,
  FETCH_PENDING,
  FETCH_POKEMONS,
  CREATE_NEW_POKEMON,
  FETCH_POKEMON_BY_ID,
  FETCH_POKEMON_TYPES,
  FETCH_POKEMON_BY_NAME
} from "../constants";

const initialState = {
  error: null,
  pending: false,
  pokemons: undefined,
  newPokemon: undefined,
  currentPage: 1,
  pokemonById: undefined,
  pokemonTypes: undefined
  /** sort: "default",
  order: "",
  */
};

export function rootReducer(state = initialState, { type, payload, error }) {
  switch (type) {
    case FETCH_PENDING:
      return {
        ...state,
        pending: true,
      }
    case FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: error
      }
    case FETCH_POKEMONS:
      return {
        ...state,
        pending: false,
        pokemons: payload
      }
    case FETCH_POKEMON_BY_ID:
      return {
        ...state,
        pending: false,
        pokemonById: payload
      }
    case CREATE_NEW_POKEMON:
      return {
        ...state,
        pending: false,
        newPokemon: payload
      }
    case FETCH_POKEMON_TYPES:
      return {
        ...state,
        pending: false,
        pokemonTypes: payload
      }
    case GO_TO_PAGE:
      return {
        ...state,
        currentPage: payload
      }
    case FETCH_POKEMON_BY_NAME:
      return {
        ...state,
        pending: false,
        pokemons: payload
      }
    default: 
      return state;
  }
}

