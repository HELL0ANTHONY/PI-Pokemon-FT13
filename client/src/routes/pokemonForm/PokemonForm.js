import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchNewPokemon from "../../redux/reducers/postTheNewPokemon";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";

import { PokemonFormLogic } from "./PokemonFormLogic";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
// import CheckboxModal from "../../components/modals/checkboxModal/CheckboxModal";
import AddTypesModal from "../../components/modals/addTypesModal/AddTypesModal";
import "./pokemonForm.css";

const PokemonForm = () => {
  const { pokemonTypes } = useSelector(state => state);
  const dispatch = useDispatch();
  const {
    inputAttributes,
    //  checkboxLogic,
    createNewTypesLogic,
    newPokemonAttributes,
    cleanForm,
    errors,
  } = PokemonFormLogic();

  const {
    checkboxTypes,
    openModal: openModalOfNewTypes,
    ...newTypesModalAttributes
  } = createNewTypesLogic();

  // const { openModal, ...modalCheckboxAttributes } = checkboxLogic();

  const inputs = inputAttributes();

  useEffect(() => {
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

  const [selectPokemonTypes, setSelectPokemonTypes] = useState({
    pokeTypes: [],
  });

  const handleSubmit = event => {
    event.preventDefault();
    const { types, ...rest } = newPokemonAttributes();
    const selectedTypes = selectPokemonTypes.pokeTypes.map(e => ({ name: e }));
    const pokemonTypes = [...types, ...selectedTypes];

    if (!Object.entries(errors).length) {
      dispatch(fetchNewPokemon({ ...rest, types: pokemonTypes }));
      setSelectPokemonTypes({ pokeTypes: [] });
      cleanForm();
      return alert("success!");
    } else {
      return alert("Something went wrong. Please check your data");
    }
  };

  const handleSelect = event => {
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
  };

  const handleDeleteSelect = value => {
    setSelectPokemonTypes(prevState => ({
      pokeTypes: prevState.pokeTypes.filter(type => type !== value),
    }));
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div>
        <h1>Create your new Pokemon</h1>
        <p>Please fill in this form to create a new Pokemon.</p> <hr />
        {inputs.map((input, index) => (
          <Input key={index} {...input} />
        ))}
      </div>

      <div>
        <ul
          style={{
            display: `${
              selectPokemonTypes.pokeTypes.length ? "block" : "none"
            }`,
          }}
        >
          {selectPokemonTypes.pokeTypes.map((type, index) => (
            <li onClick={() => handleDeleteSelect(type)} key={index}>
              {type}
            </li>
          ))}
        </ul>
        <select
          multiple={true}
          value={selectPokemonTypes.pokeTypes}
          onChange={handleSelect}
        >
          {pokemonTypes &&
            pokemonTypes?.data.map(({ name, id }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
        </select>
      </div>

      {/*<CheckboxModal list={pokemonTypes} {...modalCheckboxAttributes} /> */}
      <AddTypesModal {...newTypesModalAttributes} />

      <div className="buttons">
        <Button
          onClick={openModalOfNewTypes}
          buttonSize="btn-medium"
          buttonStyle="btn--success--solid"
        >
          Add New Types
        </Button>

        {/*<Button
          onClick={openModal}
          buttonSize="btn-medium"
          buttonStyle="btn--success--solid"
        >
          Select Types
        </Button> */}

        <Button
          type="submit"
          buttonSize="btn-medium"
          buttonStyle="btn--success--solid"
        >
          Create Pokemon
        </Button>
      </div>
    </form>
  );
};

export default PokemonForm;
