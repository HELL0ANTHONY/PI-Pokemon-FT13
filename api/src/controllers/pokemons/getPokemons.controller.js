const Sort                        = require("./Sort");
const Cache                       = require("./Cache");
const fetchData                   = require("../../helper/fetchData"); 
const pagination                  = require("./pagination");
const { Pokemon, Type }           = require("../../db");
const { pokemonById: endpoint }   = require("../../constants");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");

const cache = new Cache();

async function getPokemons(req, res, next) {
  const LIMIT        = 12;
  const page         = Number.parseInt(req.query.page);
  const sort         = req.query.sort?.trim();
  const order        = req.query.order?.trim();
  const filter       = req.query.filter?.trim();
  const sendPokemons = req.query.sendPokemons?.trim();
  const pokemonsFrom = req.query.pokemonsFrom?.trim();

  if (sendPokemons === undefined && Number.isNaN(page))
    throw new Error("'Page' is not a number");

  const NUMBER_OF_REQUESTS_TO_THE_API = 10;

  if (!cache.getLength()) {
    const promises = [...Array(NUMBER_OF_REQUESTS_TO_THE_API + 1).keys()]
      .slice(1).map(id => fetchData(endpoint(id)));
    const listOfPokemons     = await Promise.all(promises);
    const pokemonsFromTheApi = filteringAndSortingData(listOfPokemons);
    cache.setValue(pokemonsFromTheApi);
  } 

  const pokemonsFromTheDB = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["id", "name"],
      through: {
        attributes: []
      }
    }
  });

  let mergedDatabase = [];
  if (pokemonsFrom !== undefined && pokemonsFrom && pokemonsFrom !== "all") {
    mergedDatabase = (pokemonsFrom === "api")
      ? [...cache.getValues()]
      : [...pokemonsFromTheDB];
  } else mergedDatabase = [...pokemonsFromTheDB, ...cache.getValues()];

  if (sendPokemons !== undefined && sendPokemons && sendPokemons === "ok") {
    return res.json({ data: mergedDatabase });
  }

  let pokemons = [];
  if (filter !== undefined && filter && filter !== "all" ) {
    pokemons = mergedDatabase
      .filter(({ types }) => types.some(({ name }) => name === filter))
  } else pokemons = [...mergedDatabase];

  let pokemonsSorted = [];
  if(sort !== undefined && sort && sort !== "default") {
    pokemonsSorted = (sort === "name")
      ? Sort.byName(pokemons, order)
      : Sort.byForce(pokemons, order);
  } else {
    pokemonsSorted = (order === "asc") 
      ? [...pokemons] 
      : [...pokemons].reverse();
  }

  const pageConfig = pagination(page, LIMIT, pokemonsSorted);
  const { startIndex, endIndex, ...rest } = pageConfig;

  if ((page <= 0) && rest.totalPages < page)
    throw new Error("The page you are requesting does not exists");

  const data           = pokemonsSorted.slice(startIndex, endIndex);
  const paginationData = { rows: data.length, ...rest };

  return res.json({
    paginationData,
    data
  });
}

module.exports = getPokemons;
