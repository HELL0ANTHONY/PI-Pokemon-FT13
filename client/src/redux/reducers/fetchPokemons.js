import { fetchPending, fetchError, fetchPokemons } from "../actions/actions";

function getPokemons(url) {
  return async dispatch => {
    try {
      dispatch(fetchPending());
      const res = await fetch(url);
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
