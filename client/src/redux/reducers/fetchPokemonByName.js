import { fetchPending, fetchError, fetchPokemonByName } from "../actions/actions";

function getPokemonByName(name) {
  return async dispatch => {
    try {
      dispatch(fetchPending());
      const res = await fetch(`http://localhost:3001/pokemon?name=${name}`);
      if (!res.ok) throw(res.error);
      const json = await res.json();
      dispatch(fetchPokemonByName(json));
      return json;
    }
    catch(error) {
      dispatch(fetchError(error));
    }
  };
}

export default getPokemonByName;
