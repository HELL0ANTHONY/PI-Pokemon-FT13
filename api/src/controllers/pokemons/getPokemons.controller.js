const Cache                       = require("./Cache");
const fetchData                   = require("../../helper/fetchData"); 
const pagination                  = require("./pagination");
const sortPokemons                = require("./sortPokemons.js");
const { Pokemon, Type }           = require("../../db");
const { pokemonById: endpoint }   = require("../../constants");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");

const cache = new Cache();

async function getPokemons(req, res, next) {
  const LIMIT = 12;
  const page  = Number.parseInt(req.query.page);
  const sort  = req.query.sort?.trim();
  const order = req.query.order?.trim();

  if (Number.isNaN(page)) throw new Error("'Page' is not a number");

  const NUMBER_OF_REQUESTS_TO_THE_API = 12;

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

  const pokemons     = [...pokemonsFromTheDB, ...cache.getValues()];
  let pokemonsSorted = [];

  if(sort !== undefined && sort && sort !== "default") {
    pokemonsSorted = (sort === "name")
      ? sortPokemons().byName(pokemons, order)
      : sortPokemons().byForce(pokemons, order);
  } else pokemonsSorted = [...pokemons];

  const pageConfig = pagination(page, LIMIT, pokemonsSorted);
  const { startIndex, endIndex, ...rest } = pageConfig;

  if ((page <= 0) || (page > rest.totalPages))
    throw new Error("The page you are requesting does not exists");

  const data           = pokemonsSorted.slice(startIndex, endIndex);
  const paginationData = { rows: data.length, ...rest };

  return res.json({
    paginationData,
    data
  });
}

module.exports = getPokemons;
