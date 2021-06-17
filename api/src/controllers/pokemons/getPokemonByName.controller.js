const { Op }                      = require("sequelize");
const pokeApi                     = require("./getPokemonFromTheApi");
const { Pokemon, Type }           = require("../../db");
const { pokemonByName: endpoint } = require("../../constants");

async function getPokemonByName(req, res, next) {
  const name    = req.query.name;
  let   pokemon = [];

  if (!req.query?.name || !name.trim() || !isNaN(name))
    throw new Error("Invalid Parameters");
  
  pokemon = await pokeApi(endpoint(name.toLowerCase()));
  const pokemonFromDB = await Pokemon.findAll({
    where: {
      name: {
        [Op.like]: name.toLowerCase()
      }
    },
    include: {
      model: Type,
      attributes: ["id", "name"],
      through: {
        attributes: []
      }
    }
  });
  if (pokemonFromDB) pokemon = [...pokemon, ...pokemonFromDB];

  if (!pokemon.length)
    return res.status(404).send(`There is no pokemon with the name: ${name}`);

  return res.json({
    data: pokemon
  });
}

module.exports = getPokemonByName;
