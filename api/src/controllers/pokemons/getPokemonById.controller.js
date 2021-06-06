const fetchData = require("../../helper/fetchData");
const { Pokemon, Type } = require("../../db");
const { pokemonById: endPoint } = require("../../constants/index");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");

/*
  - [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Número de Pokemon (id)
- [ ] Estadísticas (vida, fuerza, defensa, velocidad)
- [ ] Altura y peso
*/

async function getPokemonById(req, res, next) {
  const id = req.params.id;

  const pokemonFromApi = await fetchData(endPoint(id));
  const filteredAndSorted = filteringAndSortingData(pokemonFromApi);

  return res.json({
    data: filteredAndSorted
  });
}

module.exports = getPokemonById;