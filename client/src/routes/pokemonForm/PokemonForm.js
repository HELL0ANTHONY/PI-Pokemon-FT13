import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";

import { PokemonFormLogic } from "./PokemonFormLogic";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import AddTypesModal from "../../components/modals/addTypesModal/AddTypesModal";
import "./pokemonForm.css";

const PokemonForm = () => {
  const {
    handleSubmit,
    selectLogic,
    selectPokemonTypes,
    inputAttributes,
    createNewTypesLogic
  } = PokemonFormLogic();

  const dispatch = useDispatch();
  const inputs = inputAttributes();
  const { pokemonTypes } = useSelector(state => state);
  const { openModal: openModalOfNewTypes, ...newTypesModalAttributes } =
    createNewTypesLogic();
  const { handleSelect, handleDeleteSelect } = selectLogic();

  useEffect(() => {
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div>
        <h1>Create your new Pokemon</h1>
        <p>Please fill in this form to create a new Pokemon.</p> <hr />
        {inputs.map((input, index) => (
          <Input key={index} {...input} />
        ))}
      </div>

      <AddTypesModal {...newTypesModalAttributes} />
      <div>
        <ul
          className="list-types"
          style={{
            display: `${selectPokemonTypes.pokeTypes.length ? "block" : "none"}`,
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
      <div className="buttons">
        <Button
          onClick={openModalOfNewTypes}
          buttonSize="btn-medium"
          buttonStyle="btn--success--solid"
        >
          Add New Types
        </Button>
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