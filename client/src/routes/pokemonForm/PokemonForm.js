import { useEffect } from "react";
import { connect } from "react-redux";
import fetchNewPokemon from "../../redux/reducers/postTheNewPokemon";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";

import { PokemonFormLogic } from "./PokemonFormLogic";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import CheckboxModal from "../../components/modals/checkboxModal/CheckboxModal";
import AddTypesModal from "../../components/modals/addTypesModal/AddTypesModal";
import "./pokemonForm.css";

const PokemonForm = ({
  createPokemon,
  getPokemonTypes,
  newPokemon,
  pokemonTypes,
}) => {
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
    getPokemonTypes();
  }, [getPokemonTypes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.entries(errors).length) {
      createPokemon(newPokemonAttributes());
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
        <p>Please fill in this form to create a new Pokemon.</p>
        <hr />
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

const mapStateToProps = ({ newPokemon, pokemonTypes }) => ({
  newPokemon,
  pokemonTypes,
});

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (object) => dispatch(fetchNewPokemon(object)),
  getPokemonTypes: (_) => dispatch(fetchPokemonTypes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
