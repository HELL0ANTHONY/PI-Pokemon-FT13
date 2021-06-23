export const pokemonFormValidation = input => {
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexNameSize = /^.{1,255}$/;

  const { name, image, ...stats } = input;

  if (!name.trim()) {
    errors.name = "The 'name' field is required";
  } else if (!regexName.test(name.trim())) {
    errors.name = "The name field only accepts characters, not numerics";
  } else if (!regexNameSize.test(name.trim())) {
    errors.name = "The name field cannot exceed 255 characters";
  }

  for (const [key, value] of Object.entries(stats)) {
    if (value < 0) {
      errors[key] = `This field cannot be a negative value`;
    } else if (!isNaN(key)) {
      errors[key] = `This only accept numeric values`;
    }
  }

  return errors;
};
