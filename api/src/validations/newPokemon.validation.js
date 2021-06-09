const { isBlank } = require("../helper/isBlank");

const regexs = {
  str: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
};

const errorMessage = message => {
  throw new Error (message);
};

function validator(data) {
  const { name, image, types, ...rest } = data;
  checkTypes(types);
  checkStats(rest);
  if (name === undefined || !name.trim())
    errorMessage("Name is required");
  if (!regexs.str.test(name.trim()))
    errorMessage(`${name} is not a valid name`);
  if (!isNaN(image))
    errorMessage(`Incorrect value: ${image}`)
}

function checkTypes(types) {
  if (types === undefined)
    errorMessage("Types is not defined");
  if (!Array.isArray(types))
    errorMessage("Types has to be an array");
  if (!types.length)
    errorMessage("Types is empty");

  for (type of types)
    if (!regexs.str.test(type.name.trim()))
      errorMessage(`Incorrect value: ${type.name}`);
}

function checkStats(object) {
  for (const [key, value] of Object.entries(object))
    if (typeof value !== "number")
      errorMessage(`${key} is not a valid value`);
}

module.exports = validator;
