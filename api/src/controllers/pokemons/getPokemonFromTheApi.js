const fetchData = require("../../helper/fetchData");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");

async function getPokemonFromTheApi(endpoint) {
  const pokemonFromApi = await fetchData(endpoint);
  return (Object.entries(pokemonFromApi).length)
    ? filteringAndSortingData(pokemonFromApi)
    : [];
}

module.exports = getPokemonFromTheApi;