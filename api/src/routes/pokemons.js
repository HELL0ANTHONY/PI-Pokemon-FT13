const { Router } = require("express");
const router = Router();

const routerHelper = require("../helper/routerHelper");
const createPokemon = require("../controllers/pokemons/createPokemon.controller");

router.post("/pokemons", routerHelper(createPokemon));

module.exports = router;