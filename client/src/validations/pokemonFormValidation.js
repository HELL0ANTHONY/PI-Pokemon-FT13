
// TODO: Al hacer la validacion tener en cuenta los numeros negativos "no pueden ser permitidos".
export const pokemonFormValidation = (input) => {
  const errors        = {};
  const regexName     = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;  
  const regexNameSize = /^.{1,255}$/;

  const { name, image } = input;

  if (!name.trim()) {
    errors.name = "The 'name' field is required";
  } else if (!regexName.test(name.trim())) {
    errors.name = "The name field only accepts characters, not numerics";
  } else if (!regexNameSize.test(name.trim())) {
    errors.name = "The name field cannot exceed 255 characters";
  }

  if (!isNaN(image.trim())) {
    errors.image = "Image field only accepts characters, not numerics"; 
  }

  
  return errors;
};
