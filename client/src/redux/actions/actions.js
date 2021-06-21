import {
  SORT_BY,
  GO_TO_PAGE,
  FETCH_ERROR,
  CHANGE_ORDER,
  CLEAN_DETAILS,
  FETCH_PENDING,
  FETCH_POKEMONS,
  FILTER_BY_TYPE,
  CREATE_NEW_POKEMON,
  FETCH_POKEMON_TYPES,
  FETCH_POKEMON_BY_ID,
  FETCH_POKEMON_BY_NAME,
} from "../constants";

export const cleanDetails = payload => ({
  type: CLEAN_DETAILS,
  payload: undefined,
});

export const filterByType = payload => ({
  type: FILTER_BY_TYPE,
  payload,
});

export const changeOrder = payload => ({
  type: CHANGE_ORDER,
  payload,
});

export const goToPage = payload => ({
  type: GO_TO_PAGE,
  payload,
});

export const setSortBy = payload => ({
  type: SORT_BY,
  payload,
});

export const fetchPending = _ => ({
  type: FETCH_PENDING,
});

export const fetchError = error => ({
  type: FETCH_ERROR,
  error,
});

export const fetchPokemons = payload => ({
  type: FETCH_POKEMONS,
  payload,
});

export const fetchPokemonById = payload => ({
  type: FETCH_POKEMON_BY_ID,
  payload,
});

export const fetchNewPokemon = payload => ({
  type: CREATE_NEW_POKEMON,
  payload,
});

export const fetchPokemonTypes = payload => ({
  type: FETCH_POKEMON_TYPES,
  payload,
});

export const fetchPokemonByName = payload => ({
  type: FETCH_POKEMON_BY_NAME,
  payload,
});
