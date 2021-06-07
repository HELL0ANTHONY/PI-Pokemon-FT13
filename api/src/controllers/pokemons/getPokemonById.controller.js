const { isNumeric }             = require("../../helper/isNumeric");
const pokeApi                   = require("./getPokemonFromTheApi");
const { Pokemon, Type }         = require("../../db");
const { pokemonById: endpoint } = require("../../constants/index");

async function getPokemonById(req, res, next) {
  const id      = req.params.id;
  let   pokemon = [];

  if (isNumeric(id)) pokemon = await pokeApi(endpoint(+id));
  else {
    const pokemonFromDB = await Pokemon.findByPk(id, {
      include: {
        model: Type,
        attributes: ["id" ,"name"],
        through: {
          attributes: []
        }
      }
    });
    pokemon = pokemonFromDB ? [pokemonFromDB] : [];
  }

  if (!pokemon.length)
    return res.status(404).send(`There is no pokemon with the id: ${id}`);

  return res.json({
    data: pokemon
  });
}

module.exports = getPokemonById;