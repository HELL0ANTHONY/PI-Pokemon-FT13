import { fetchPending, fetchError, fetchPokemonById } from "../actions/actions";

function getPokemonById(id) {
  return async dispatch => {
    try {
      dispatch(fetchPending());
      const res = await fetch(`http://localhost:3001/pokemons/${id}`);
      if (!res.ok) throw(res.error);
      const json = await res.json();
      dispatch(fetchPokemonById(json));
      return json;
    }
    catch(error) {
      dispatch(fetchError(error));
    }
  };
}

export default getPokemonById;
