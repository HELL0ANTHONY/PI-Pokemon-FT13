import {
  fetchPending,
  fetchError,
  fetchPokemonByName,
} from "../actions/actions";

function getPokemonByName(name) {
  return async (dispatch) => {
    try {
      dispatch(fetchPending());
      const res = await fetch(`http://localhost:3001/pokemons?sendPokemons=ok`);
      if (!res.ok) throw new Error("Error with the server");
      const json = await res.json();
      dispatch(fetchPokemonByName({ name, json }));
      return json;
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
}

export default getPokemonByName;
