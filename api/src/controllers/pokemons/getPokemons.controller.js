const fetchData                   = require("../../helper/fetchData"); 
const { Pokemon, Type }           = require("../../db");
const { pokemonById: endpoint }   = require("../../constants");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");
/*
   - Obtener un listado de los primeros 12 pokemons desde pokeapi
   - Debe devolver solo los datos necesarios para la ruta principal

   Nota: al inicio trae 20
 * almacenados en "results"
 * la url a la siguiente pagina esta almacenado en "next"
 */
async function getPokemons(req, res, next) {
  const pokemonsFromTheDB = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["id", "name"],
      through: {
        attributes: []
      }
    }
  });

  const promises           = [...Array(10).keys()].slice(1).map(id => fetchData(endpoint(id)));
  const listOfPokemons     = await Promise.all(promises);
  const pokemonsFromTheApi = filteringAndSortingData(listOfPokemons);

  const pokemons = [...pokemonsFromTheDB, ...pokemonsFromTheApi];
  return res.json({
    data: pokemons
  });
}

module.exports = getPokemons;
