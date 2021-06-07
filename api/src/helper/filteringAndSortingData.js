const mergeArrayOfObjs = arr => Object.assign({}, ...arr);

exports.filteringAndSortingData = data => {
  const array = Array.isArray(data) ? data : [data];
  return array.map(e => {
    const types = e.types.map(({ type: { name } }) => ({ name }));
    const pokemonStats = e.stats.map(({ base_stat, stat: { name } }) => ({ [name]: base_stat }));
    const { hp = 0, defense = 0, speed = 0 } = mergeArrayOfObjs(pokemonStats);
    return {
      id: e.id,
      name: e.name,
      hp,
      speed,
      types,
      defense,
      height: e.height,
      weight: e.weight,
      baseExperience: e.base_experience,
      image: e?.sprites?.front_default
    };
  });
};
