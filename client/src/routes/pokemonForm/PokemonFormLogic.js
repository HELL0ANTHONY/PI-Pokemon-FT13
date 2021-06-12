import { useState } from "react";
import { useModal } from "../../hooks/useModal";

export const PokemonFormLogic = () => {
  const [input, setInput]                 = useState(initialState());
  const [checkboxTypes, setCheckboxTypes] = useState([]);
  const [isOpenModalOfTypes, openModalOfTypes, closeModalOfTypes] = useModal();

  const handleInput = e => {
    const { name, value } = e.target;
    e.preventDefault();
    setInput({
      ...input,
      [name]: value
    });
  };

  return {
    inputAttributes,
    checkboxLogic,
    input,
    checkboxTypes
  };

  function checkboxLogic() {
    return {
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
