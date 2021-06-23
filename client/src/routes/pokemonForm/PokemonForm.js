import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchNewPokemon from "../../redux/reducers/postTheNewPokemon";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";

import { PokemonFormLogic } from "./PokemonFormLogic";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import CheckboxModal from "../../components/modals/checkboxModal/CheckboxModal";
import AddTypesModal from "../../components/modals/addTypesModal/AddTypesModal";
import "./pokemonForm.css";

const PokemonForm = () => {
  const { pokemonTypes } = useSelector(state => state);
  const dispatch = useDispatch();
  const {
    inputAttributes,
    checkboxLogic,
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

  const { openModal, ...modalCheckboxAttributes } = checkboxLogic();

  const inputs = inputAttributes();

  useEffect(() => {
    dispatch(fetchPokemonTypes());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!Object.entries(errors).length) {
      dispatch(fetchNewPokemon(newPokemonAttributes()));
      cleanForm();
      return alert("success!");
    } else {
      return alert("Something went wrong. Please check your data");
    }
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

      <CheckboxModal list={pokemonTypes} {...modalCheckboxAttributes} />
      <AddTypesModal {...newTypesModalAttributes} />

      <div className="buttons">
        <Button
          onClick={openModalOfNewTypes}
          buttonSize="btn-medium"
          buttonStyle="btn--success--solid"
        >
          Add New Types
        </Button>

        <Button
          onClick={openModal}
          buttonSize="btn-medium"
          buttonStyle="btn--success--solid"
        >
          Select Types
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

/*


*/
