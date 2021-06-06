const fetchData                   = require("../../helper/fetchData");
const { isNumeric }               = require("../../helper/isNumeric");
const { Pokemon, Type }           = require("../../db");
const { pokemonById: endpoint }   = require("../../constants/index");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");

async function getPokemonById(req, res, next) {
  const id      = req.params.id;
  let   pokemon = [];

  if (isNumeric(id)) {
    const pokemonFromApi = await fetchData(endpoint(+id));
          pokemon        = filteringAndSortingData(pokemonFromApi);
  } else {
    const pokemonFromDB = await Pokemon.findByPk(id, {
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    });
    pokemon = pokemonFromDB ? [pokemonFromDB] : [];
  }

  if (!pokemon.length)
    throw new Error(`There is no pokemon with the id: ${id}`);

  return res.json({
    data: pokemon
  });
}

module.exports = getPokemonById;