const fetchData                   = require("../../helper/fetchData"); 
const { Pokemon, Type }           = require("../../db");
const { pokemonById: endpoint }   = require("../../constants");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");
const pagination                  = require("./pagination");
const Cache                       = require("./cache");

const cache = new Cache();

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

  const NUMBER_OF_REQUESTS_TO_THE_API = 20;

  if (!cache.getLength()) {
    const promises = [...Array(NUMBER_OF_REQUESTS_TO_THE_API).keys()]
      .slice(1).map(id => fetchData(endpoint(id)));
    const listOfPokemons     = await Promise.all(promises);
    const pokemonsFromTheApi = filteringAndSortingData(listOfPokemons);
    cache.setValue(pokemonsFromTheApi);
    console.log("inside the 'if' statement");
  } 

  const pokemons   = [...pokemonsFromTheDB, ...cache.getValues()];
  const pageConfig = pagination(page, LIMIT, pokemons);

  const { startIndex, endIndex, ...rest } = pageConfig;

  if ((page <= 0) || (page > rest.totalPages))
    throw new Error("The page you are requesting does not exists");

  const data = pokemons.slice(startIndex, endIndex);

  return res.json({
    PaginationData: {
      rows: data.length,
      ...rest
    },
    data
  });
}

module.exports = getPokemons;
