import {
/*  SORT,
  CHANGE_PAGE,
  CHANGE_ORDER, */
  FETCH_ERROR,
  FETCH_PENDING, 
  FETCH_POKEMONS,
  FETCH_POKEMON_BY_ID,
  /*FETCH_POKEMON_TYPES,
  FETCH_POKEMON_BY_NAME */
} from "../constants";

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


/*export const fetchPokemonByName = payload => ({
  type: FETCH_POKEMON_BY_NAME,
  payload
});


export const fetchPokemonTypes = payload => ({
  type: FETCH_POKEMON_TYPES,
  payload
}); 

const sort = payload => ({
  type: SORT,
  payload
});

const changeOrder = payload => ({
  type: CHANGE_ORDER,
  payload
}); */
