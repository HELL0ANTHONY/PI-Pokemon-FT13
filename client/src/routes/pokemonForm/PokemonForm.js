import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { connect } from "react-redux";
import fetchNewPokemon from "../../redux/reducers/postTheNewPokemon";
import "./pokemonForm.css";

import { PokemonFormLogic } from "./PokemonFormLogic";
import Input from "../../components/input/Input";

const PokemonForm = ({ createPokemon, newPokemon }) => {
  const { formAttributes, input } = PokemonFormLogic();

  const attributes = formAttributes();

  return (
    <form className="create">
      <div>
        <h1>Create your new Pokemon</h1>
        <p>Please fill in this form to create a new Pokemon.</p>
        <hr />
        {attributes.map((attribute, id) => <Input key={id} {...attribute} />)} 
      </div>
    </form>
  );
};

const mapStateToProps = ({ newPokemon }) => ({
  newPokemon
}); 

const mapDispatchToProps = dispatch => ({
  createPokemon: object => dispatch(fetchNewPokemon(object))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
