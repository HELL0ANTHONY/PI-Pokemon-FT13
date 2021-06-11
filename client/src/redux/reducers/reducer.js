import {
  SORT,
  CHANGE_PAGE,
  CHANGE_ORDER,
  FETCH_ERROR,
  FETCH_PENDING,
  FETCH_POKEMONS,
  FETCH_POKEMON_BY_ID,
  FETCH_POKEMON_TYPES,
  FETCH_POKEMON_BY_NAME
} from "../constants";

const initialState = {
  pending: false,
  error: null,
  pokemons: undefined,
  pokemonTypes: undefined,
  pokemonById: undefined,
/**  pokemonByName: undefined,
  sort: "default",
  order: "",
  page: 1, */
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
    default: 
      return state;
  }
}

