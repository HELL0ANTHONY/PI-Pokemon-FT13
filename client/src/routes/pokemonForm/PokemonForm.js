import { useEffect } from "react";
import { connect } from "react-redux";
import fetchNewPokemon from "../../redux/reducers/postTheNewPokemon";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";

import { PokemonFormLogic } from "./PokemonFormLogic";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import CheckboxModal from "../../components/modals/checkboxModal/CheckboxModal";
import "./pokemonForm.css";


const PokemonForm = ({ createPokemon, getPokemonTypes, newPokemon, pokemonTypes }) => {
  const { inputAttributes, checkboxLogic, input, checkboxTypes } = PokemonFormLogic();
  const { openModal, ...modalCheckboxAttributes } = checkboxLogic(); // no tocar!
  const inputs = inputAttributes(); // no tocar!

  console.log({input});
  console.log({checkboxTypes});



  useEffect(() => {
    getPokemonTypes();
  }, [getPokemonTypes]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(input);
    alert("New Pokemon Created");
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div>
        <h1>Create your new Pokemon</h1>
        <p>Please fill in this form to create a new Pokemon.</p>
        <hr />
        {inputs.map((input, id) => <Input key={id} {...input} />)} 
      </div>
      
      <CheckboxModal list={pokemonTypes} {...modalCheckboxAttributes} />
      
      <div className="buttons">
        <Button
          onClick={openModal}
          buttonSize="btn-medium"
          buttonStyle="btn--success--solid"
        >Select Types</Button>
        
        <Button
          type="submit"
          buttonSize="btn-medium"
          buttonStyle="btn--success--solid"
        >Create Pokemon</Button>
      </div>
    </form>
  );
};

const mapStateToProps = ({ newPokemon, pokemonTypes }) => ({
  newPokemon,
  pokemonTypes
}); 

const mapDispatchToProps = dispatch => ({
  createPokemon: object => dispatch(fetchNewPokemon(object)),
  getPokemonTypes: _ => dispatch(fetchPokemonTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
