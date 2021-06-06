const { Pokemon, Type } = require(".././../db");
const { v4: uuidv4 }    = require('uuid');

const createPokemon = async (req, res, next) => {
  const id = uuidv4();
  const {
    types,
    ...pokemonData
  } = req.body;

  const newPokemon = await Pokemon.create({
    id,
    ...pokemonData
  }, {
    fields: [
      "id",
      "name",
      "baseExperience",
      "hp",
      "defense",
      "speed",
      "height",
      "weight",
      "image"
    ]
  });

  const cleanTypes = types
    .map(({ name }) => name.trim().toLowerCase())
    .filter(name => name);

  const typesWithoutDuplicate = [...new Set(cleanTypes)].map(name => ({ name }));
  const promiseOfTypes        = typesWithoutDuplicate.map(({ name }) => Type.findOrCreate({
    where: {
      name
    }
  }));

  const typesResolve = await Promise.all(promiseOfTypes);
  const pokemonTypes = typesResolve.flat().filter(e => typeof e !== "boolean");
  await newPokemon.addTypes(pokemonTypes);

  return res.json({
    newPokemon,
    pokemonTypes
  });
};

module.exports = createPokemon;