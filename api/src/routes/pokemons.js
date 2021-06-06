const { Router } = require("express");
const router = Router();

const routerHelper = require("../helper/routerHelper");
const createPokemon = require("../controllers/pokemons/createPokemon.controller");
const pokemonById = require("../controllers/pokemons/getPokemonById.controller");
const pokemonByName = require("../controllers/pokemons/getPokemonByName.controller");

router.post("/pokemons", routerHelper(createPokemon));
router.get("/pokemons/:id", routerHelper(pokemonById));
router.get("/pokemons", routerHelper(pokemonByName));

module.exports = router;