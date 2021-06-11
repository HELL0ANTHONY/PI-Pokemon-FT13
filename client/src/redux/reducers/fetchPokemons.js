import { fetchPending, fetchError, fetchPokemons } from "../actions/actions";

function getPokemons(page = 1, sort = "default", order = "") {
  return async dispatch => {
    try {
      dispatch(fetchPending());
      const res = await fetch(`http://localhost:3001/pokemons?page=${page}&sort=${sort}&order=${order}`);
      if (!res.ok) throw(res.error);
      const json = await res.json();
      dispatch(fetchPokemons(json));
      return json;
    }
    catch(error) {
      dispatch(fetchError(error));
    }
  };
}

export default getPokemons;
