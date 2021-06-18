const compareByForce = (a, b) =>  a.baseExperience - b.baseExperience;

const compare = (f, s) => {
  const a = f.name.toLowerCase(); 
  const b = s.name.toLowerCase(); 
  return (a < b) ? -1 : (a > b) ? 1 : 0;
};

function Sort() { }

Sort.byName = function(array, order) {
  return order === "asc" 
    ? array.sort(compare) 
    : array.sort((a, b) => compare(b, a));
}

Sort.byForce = function(array, order) {
  return order === "asc"
    ? array.sort(compareByForce)
    : array.sort((a, b) => compareByForce(b, a));
}

module.exports = Sort;
