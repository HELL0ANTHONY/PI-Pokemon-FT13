import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { pokemonFormValidation } from "../../validations/pokemonFormValidation";
import { useDispatch } from "react-redux";
import fetchNewPokemon from "../../redux/reducers/postTheNewPokemon";

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

export const PokemonFormLogic = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [newInputs, setNewInputs] = useState([]);
  const [input, setInput] = useState(initialState());
  const [selectPokemonTypes, setSelectPokemonTypes] = useState({
    pokeTypes: [],
  });
  const [isOpenModalNewTypes, openModalNewTypes, closeModalNewTypes] =
    useModal();

  return {
    handleSubmit,
    setSelectPokemonTypes,
    selectPokemonTypes,
    selectLogic,
    inputAttributes,
    createNewTypesLogic
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (!Object.entries(errors).length) {
      dispatch(fetchNewPokemon(newPokemonAttributes()));
      cleanForm();
      return alert("success!");
    } else {
      return alert("Something went wrong. Please check your data");
    }
  }

  function selectLogic() {
    return {
      handleSelect(event) {
        event.preventDefault();
        let types = [];
        const options = event.target.options;
        for (let i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            types.push(options[i].value);
          }
        }
        setSelectPokemonTypes({
          pokeTypes: [...selectPokemonTypes.pokeTypes, ...types],
        });
      },
      handleDeleteSelect(value) {
        setSelectPokemonTypes(prevState => ({
          pokeTypes: prevState.pokeTypes.filter(type => type !== value),
        }));
      }
    };
  }

  function newPokemonAttributes() {
    const { name, image, ...numberValues } = input;
    const newTypes = newInputs
      .filter(t => t.trim() && isNaN(t.trim()))
      .map(t => ({ name: t }));
    const typesFromTheSelect = selectPokemonTypes.pokeTypes
      .map(e => ({ name: e }));
    const numbers = Object.fromEntries(
      Object.entries(numberValues).map(([key, value]) => [key, +value])
    );
    return {
      name,
      image,
      ...numbers,
      types: [...newTypes, ...typesFromTheSelect],
    };
  }

  function cleanForm() {
    setInput(initialState());
    setSelectPokemonTypes({ pokeTypes: [] });
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