import {
  fetchPending,
  fetchError,
  fetchPokemonTypes,
} from "../actions/actions";

function getPokemonTypes() {
  return async (dispatch) => {
    try {
      dispatch(fetchPending());
      const res = await fetch(`http://localhost:3001/types`);
      if (!res.ok) throw res.error;
      const json = await res.json();
      dispatch(fetchPokemonTypes(json));
      return json;
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
}

export default getPokemonTypes;
