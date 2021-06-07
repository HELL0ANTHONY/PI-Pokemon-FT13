const { Op }                      = require("sequelize");
const pokeApi                     = require("./getPokemonFromTheApi");
const { isNumeric }               = require("../../helper/isNumeric");
const { Pokemon, Type }           = require("../../db");
const { pokemonByName: endpoint } = require("../../constants");

async function getPokemonByName(req, res, next) {
  const name    = req.query.name;
  let   pokemon = [];

  if (!req.query?.name || !name.trim() || isNumeric(name))
    throw new Error("Invalid Parameters");

  pokemon = await pokeApi(endpoint(name));
  const pokemonFromDB = await Pokemon.findAll({
    where: {
      name: {
        [Op.like]: name
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