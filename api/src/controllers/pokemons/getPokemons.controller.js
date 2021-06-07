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
  const result = {};
  const LIMIT  = 12;
  const page   = Number.parseInt(req.query.page);

  if (Number.isNaN(page)) throw new Error("'Page' is not a number");

  const pokemonsFromTheDB = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["id", "name"],
      through: {
        attributes: []
      }
    }
  });

  const promises           = [...Array(50).keys()].slice(1).map(id => fetchData(endpoint(id)));
  const listOfPokemons     = await Promise.all(promises);
  const pokemonsFromTheApi = filteringAndSortingData(listOfPokemons);
  const pokemons           = [...pokemonsFromTheDB, ...pokemonsFromTheApi];

  const startIndex  = (page - 1) * LIMIT;
  const endIndex    = page * LIMIT;
  result.rowsTotal  = pokemons.length;
  result.totalPages = Math.ceil(result.rowsTotal / LIMIT);
  result.limit      = LIMIT;

  if ((page <= 0) || (page > result.totalPages))
   throw new Error("The page you are requesting does not exists");

  if (endIndex < result.rowsTotal) result.next = page + 1; 
  if (startIndex > 0) result.previous = page - 1;

  const data = pokemons.slice(startIndex, endIndex);
  return res.json({
    result,
    data
  });
}

module.exports = getPokemons;
