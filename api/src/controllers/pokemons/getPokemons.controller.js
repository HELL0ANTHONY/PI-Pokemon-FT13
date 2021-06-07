const fetchData                   = require("../../helper/fetchData"); 
const { Pokemon, Type }           = require("../../db");
const { pokemonById: endpoint }   = require("../../constants");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");
const pagination                  = require("./pagination");

async function getPokemons(req, res, next) {
  const LIMIT = 12;
  const page  = Number.parseInt(req.query.page);

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

  const promises           = [...Array(26).keys()].slice(1).map(id => fetchData(endpoint(id)));
  const listOfPokemons     = await Promise.all(promises);
  const pokemonsFromTheApi = filteringAndSortingData(listOfPokemons);
  const pokemons           = [...pokemonsFromTheDB, ...pokemonsFromTheApi];

  const pageConfig = pagination(page, LIMIT, pokemons);
  const { startIndex, endIndex, ...rest } = pageConfig;

  if ((page <= 0) || (page > rest.totalPages))
    throw new Error("The page you are requesting does not exists");

  const data = pokemons.slice(startIndex, endIndex); 
  return res.json({
    PaginationData: rest,
    data
  });
}

module.exports = getPokemons;
