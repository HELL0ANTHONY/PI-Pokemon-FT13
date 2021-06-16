import {
  /*  SORT,
  CHANGE_ORDER, */
  GO_TO_PAGE,
  FETCH_ERROR,
  FETCH_PENDING, 
  FETCH_POKEMONS,
  CREATE_NEW_POKEMON,
  FETCH_POKEMON_TYPES,
  FETCH_POKEMON_BY_ID,
  /* FETCH_POKEMON_BY_NAME */
} from "../constants";

// la idea con la paginacion es tener PAGE (estado inicial) que va a ser un valor numerico
// que comience con 1. Y luego tener dos acciones 'increment and dicrement' para cambiar
// su valor sumando o restando (previous and next). Ademas una accion que modifique
// el valor dependiendo del numero de la pagina que sea el boton (goto).

export const goToPage = payload => ({
  type: GO_TO_PAGE,
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

/*export const fetchPokemonByName = payload => ({
  type: FETCH_POKEMON_BY_NAME,
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
