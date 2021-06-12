// import { useModal } from "../../hooks/useModal";
import { useEffect } from "react";
import { connect } from "react-redux";
import fetchNewPokemon from "../../redux/reducers/postTheNewPokemon";
import fetchPokemonTypes from "../../redux/reducers/fetchPokemonTypes";

import { PokemonFormLogic } from "./PokemonFormLogic";
import Input from "../../components/input/Input";
import "./pokemonForm.css";


const PokemonForm = ({ createPokemon, getPokemonTypes, newPokemon, pokemonTypes }) => {
  const { inputAttributes, input } = PokemonFormLogic(); 
  const inputs = inputAttributes();

  useEffect(() => {
    getPokemonTypes();
  }, [getPokemonTypes]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div>
        <h1>Create your new Pokemon</h1>
        <p>Please fill in this form to create a new Pokemon.</p>
        <hr />
        {inputs.map((input, id) => <Input key={id} {...input} />)} 
      </div>
      
      <button>Submit</button>
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
