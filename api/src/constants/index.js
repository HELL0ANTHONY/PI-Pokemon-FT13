exports.pokemonsUrl   = () => `https://pokeapi.co/api/v2/pokemon`;
exports.pokemonTypes  = () => `https://pokeapi.co/api/v2/type`;
exports.pokemonById   = () => id => `https://pokeapi.co/api/v2/pokemon/${id}`;
exports.pokemonByName = () => name => `https://pokeapi.co/api/v2/pokemon/${name}`;