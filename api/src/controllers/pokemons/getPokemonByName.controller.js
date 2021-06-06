const { Pokemon, Types } = require("../../db");
const fetchData = require("../../helper/fetchData");
const { isNumeric } = require("../../helper/isNumeric");
const { pokemonByName: endpoint } = require("../../constants");
const { filteringAndSortingData } = require("../../helper/filteringAndSortingData");

/* __GET /pokemons?name="..."__:
- Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
- Si no existe ningún pokemon mostrar un mensaje adecuado */

/* Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo) */

/* Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /pokemons` y deberá mostrar su:
- Imagen
- Nombre
- Tipos (Eléctrico, Fuego, Agua, etc) */

async function getPokemonByName(req, res, next) {
  const name = req.query.name;

  let pokemon = [];
  if (req.query?.name && name.trim() && !isNumeric(name)) {
    const pokemonFromApi = await fetchData(endpoint(name));
    const pokemonLeakedAndSorted = filteringAndSortingData(pokemonFromApi);
    pokemon = pokemonLeakedAndSorted
  }

  res.json({
    data: pokemon
  });
}

module.exports = getPokemonByName;