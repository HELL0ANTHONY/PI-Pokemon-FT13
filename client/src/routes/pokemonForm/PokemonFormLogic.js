import { useState } from "react";

// aun falta los Types de los pokemones
export const PokemonFormLogic = () => {
  const [input, setInput] = useState(initialState());

  const handleInput = e => {
    const { name, value } = e.target;
    e.preventDefault();
    setInput({
      ...input,
      [name]: value
    });
  };

  return {
    formAttributes,
    input
  };

  function formAttributes() {
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
