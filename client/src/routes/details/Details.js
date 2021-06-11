import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import fetchPokemonById from "../../redux/reducers/fetchPokemonById";


import "./details.css";

// pokemonById => pokemonById.data[0].name
const Details = ({ fetchPokemonById, pokemonById }) => {
  const { id } = useParams();
  
  useEffect(() => {
    fetchPokemonById(id);
  }, [fetchPokemonById, id]);

  return <h1>hello {pokemonById && pokemonById.data[0].name}</h1>
};


const mapStateToProps = ({ pokemonById }) => ({
  pokemonById
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonById: id => dispatch(fetchPokemonById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
