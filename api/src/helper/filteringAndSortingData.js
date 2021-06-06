const mergeArrayOfObjs = arr => Object.assign({}, ...arr);
exports.filteringAndSortingData = data => {
  return [data].map(e => {
    const types = e.types.map(({ type: { name } }) => ({ name }));
    const pokemonStats = e.stats.map(({ base_stat, stat: { name } }) => ({ [name]: base_stat }));
    const { hp = 0, defense = 0, speed = 0 } = mergeArrayOfObjs(pokemonStats);
    return {
      hp,
      speed,
      types,
      defense,
      id: e.id,
      name: e.name,
      height: e.height,
      weight: e.weight,
      baseExperience: e.base_experience,
      image: e?.sprites?.front_default
    };
  });
};