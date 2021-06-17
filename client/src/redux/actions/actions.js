import {
  SORT_BY,
  GO_TO_PAGE,
  FETCH_ERROR,
  FETCH_PENDING, 
  FETCH_POKEMONS,
  CREATE_NEW_POKEMON,
  FETCH_POKEMON_TYPES,
  FETCH_POKEMON_BY_ID,
  FETCH_POKEMON_BY_NAME
} from "../constants";

export const goToPage = payload => ({
  type: GO_TO_PAGE,
  payload
});

export const setSortBy = payload => ({
  type: SORT_BY,
  payload
});

export const fetchPending = _ => ({
  type: FETCH_PENDING
});

export const fetchError = error => ({
  type: FETCH_ERROR,
  error 
});

export const fetchPokemons = payload => ({
  type: FETCH_POKEMONS,
  payload
});

export const fetchPokemonById = payload => ({
  type: FETCH_POKEMON_BY_ID,
  payload 
});

export const fetchNewPokemon = payload => ({
  type: CREATE_NEW_POKEMON,
  payload
});

export const fetchPokemonTypes = payload => ({
  type: FETCH_POKEMON_TYPES,
  payload
}); 

export const fetchPokemonByName = payload => ({
  type: FETCH_POKEMON_BY_NAME,
  payload
}); 

/*

const changeOrder = payload => ({
  type: CHANGE_ORDER,
  payload
}); */
