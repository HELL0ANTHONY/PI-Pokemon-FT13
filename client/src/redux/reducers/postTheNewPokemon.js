import { fetchPending, fetchError, fetchNewPokemon } from "../actions/actions";

function createNewPokemon(object) {
  return async (dispatch) => {
    try {
      dispatch(fetchPending());
      const res = await fetch(`http://localhost:3001/pokemons`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });
      if (!res.ok) throw res.error;
      const json = await res.json();
      dispatch(fetchNewPokemon(json));
      return json;
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
}

export default createNewPokemon;
