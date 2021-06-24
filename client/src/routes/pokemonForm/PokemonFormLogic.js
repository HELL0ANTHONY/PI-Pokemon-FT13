import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { pokemonFormValidation } from "../../validations/pokemonFormValidation";

export const PokemonFormLogic = () => {
  const [input, setInput] = useState(initialState());
  const [errors, setErrors] = useState({});
  const [newInputs, setNewInputs] = useState([]);
  const [checkboxTypes, setCheckboxTypes] = useState([]);

  const [isOpenModalOfTypes, openModalOfTypes, closeModalOfTypes] = useModal();
  const [isOpenModalNewTypes, openModalNewTypes, closeModalNewTypes] =
    useModal();

  return {
    inputAttributes,
    checkboxLogic,
    createNewTypesLogic,
    newPokemonAttributes,
    cleanForm,
    errors,
  };

  function newPokemonAttributes() {
    const { name, image, ...numberValues } = input;
    const newTypes = newInputs
      .filter(t => t.trim() && isNaN(t.trim()))
      .map(t => ({ name: t }));

    // const existingTypes = checkboxTypes.map(type => ({ name: type }));
    const numbers = Object.fromEntries(
      Object.entries(numberValues).map(([key, value]) => [key, +value])
    );
    return {
      name,
      image,
      ...numbers,
      types: [...newTypes],
      //types: [...existingTypes, ...newTypes],
    };
  }

  function cleanForm() {
    setCheckboxTypes([]);
    setInput(initialState());
    setNewInputs([]);
  }

  function handleInput(event) {
    const { name, value } = event.target;
    event.preventDefault();
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(pokemonFormValidation(input));
  }

  function createNewTypesLogic() {
    return {
      title: "Add the new pokemon types",
      newInputs,
      isOpen: isOpenModalNewTypes,
      openModal: event => {
        event.preventDefault();
        openModalNewTypes();
      },
      closeModal: event => {
        event.preventDefault();
        closeModalNewTypes();
      },
      addNewInput: event => {
        event.preventDefault();
        setNewInputs([...newInputs, ""]);
      },
      removeInput: (event, index) => {
        event.preventDefault();
        newInputs.splice(index, 1);
        setNewInputs([...newInputs]);
      },
      setValue: (event, index) => {
        event.preventDefault();
        newInputs[index] = event.target.value;
        setNewInputs([...newInputs]);
      },
    };
  }

  function checkboxLogic() {
    return {
      checkboxTypes,
      name: checkboxTypes,
      title: "Select Pokemon Types",
      isOpen: isOpenModalOfTypes,
      closeModal: event => {
        event.preventDefault();
        closeModalOfTypes();
      },
      openModal: event => {
        event.preventDefault();
        openModalOfTypes();
      },
      onChange: event => {
        event.preventDefault();
        if (event.target.checked) {
          setCheckboxTypes([...checkboxTypes, event.target.value]);
        }
      },
    };
  }

  function inputAttributes() {
    return [
      {
        label: "Pokemon Name:",
        type: "text",
        name: "name",
        value: input.name,
        onChange: handleInput,
        error: errors.name,
      },
      {
        label: "Force:",
        type: "number",
        name: "baseExperience",
        value: input.baseExperience,
        onChange: handleInput,
        error: errors.baseExperience,
      },
      {
        label: "Hp:",
        type: "number",
        name: "hp",
        value: input.hp,
        onChange: handleInput,
        error: errors.hp,
      },
      {
        label: "Defense:",
        type: "number",
        name: "defense",
        value: input.defense,
        onChange: handleInput,
        error: errors.defense,
      },
      {
        label: "Height:",
        type: "number",
        name: "height",
        value: input.height,
        onChange: handleInput,
        error: errors.height,
      },
      {
        label: "Weight:",
        type: "number",
        name: "weight",
        value: input.weight,
        onChange: handleInput,
        error: errors.weight,
      },
      {
        label: "Speed:",
        type: "number",
        name: "speed",
        value: input.speed,
        onChange: handleInput,
        error: errors.speed,
      },
      {
        label: "Image:",
        type: "text",
        name: "image",
        value: input.image,
        onChange: handleInput,
        error: errors.image,
      },
    ];
  }
};

function initialState() {
  return {
    name: "",
    speed: "",
    hp: "",
    defense: "",
    height: "",
    weight: "",
    baseExperience: "",
    image: "",
  };
}
