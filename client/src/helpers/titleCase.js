const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const titleCase = (string) => {
  return string.toLowerCase().split(" ").map(capitalize).join(" ");
};
