import { useState } from "react";
import { useModal } from "../../hooks/useModal";

export const PokemonFormLogic = () => {
  const [input, setInput]                 = useState(initialState());
  const [newInputs, setNewInputs]         = useState([]);
  const [checkboxTypes, setCheckboxTypes] = useState([]);

  const [isOpenModalOfTypes, openModalOfTypes, closeModalOfTypes]    = useModal();
  const [isOpenModalNewTypes, openModalNewTypes, closeModalNewTypes] = useModal();

  return {
    inputAttributes,
    checkboxLogic,
    createNewTypesLogic,
    newPokemonAttributes,
    cleanForm
  };

  function newPokemonAttributes() {
    const newTypes = newInputs.filter(t => t.trim() && isNaN(t.trim()))
      .map(t => ({ name: t }));
    const existingTypes = checkboxTypes.map(type => ({ name: type }));
    return {
      ...input, 
      types: [...existingTypes, ...newTypes] 
    };
  }

  function cleanForm() {
    setCheckboxTypes([]); // el checkbox no cambia porque el checked siempre esta en true, por lo que para que resetear hay que cambiarlo a false.
    setInput(initialState());
    setNewInputs([]); 
  }

  function handleInput(event) {
    const { name, value } = event.target;
    event.preventDefault();
    setInput({
      ...input,
      [name]: value
    });
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
      }
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
          setCheckboxTypes([
            ...checkboxTypes,
            event.target.value
          ]);
        }
      }
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
      },
      {
        label: "Force:",
        type: "number",
        name: "baseExperience",
        value: input.baseExperience,
        onChange: handleInput,
      },
      {
        label: "Hp:",
        type: "number",
        name: "hp",
        value: input.hp,
        onChange: handleInput,
      },
      {
        label: "Defense:",
        type: "number",
        name: "defense",
        value: input.defense,
        onChange: handleInput,
      },
      {
        label: "Height:",
        type: "number",
        name: "height",
        value: input.height,
        onChange: handleInput,
      },
      {
        label: "Weight:",
        type: "number",
        name: "weight",
        value: input.weight,
        onChange: handleInput,
      },
      {
        label: "Speed:",
        type: "number",
        name: "speed",
        value: input.speed,
        onChange: handleInput,
      },
      {
        label: "Image:",
        type: "text",
        name: "image",
        value: input.image,
        onChange: handleInput,
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
    image: ""
  };
}
