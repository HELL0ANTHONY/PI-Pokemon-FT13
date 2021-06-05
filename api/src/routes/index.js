const { Router } = require("express");
const router     = Router();

const pokemonsRouter = require("./pokemons");
const typesRouter    = require("./types");

router.use('/', pokemonsRouter);
router.use('/', typesRouter);

module.exports = router;