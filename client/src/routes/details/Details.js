import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import fetchPokemonById from "../../redux/reducers/fetchPokemonById";


import CardDetails from "../../components/cardDetails/CardDetails";
import "./details.css";

const Details = ({ fetchPokemonById, pokemonById }) => {
  const { id }  = useParams();
  const pokemon = pokemonById?.data[0];

  useEffect(() => {
    fetchPokemonById(id);
  }, [fetchPokemonById, id]);


  return (
    <div className="detail--container">
    {
      pokemon 
        ? <CardDetails
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types} 
            hp={pokemon.hp}
            force={pokemon.baseExperience}
            speed={pokemon.speed}
            image={pokemon.image}
            height={pokemon.height}
            weight={pokemon.weight}
            defense={pokemon.defense}
          />
        : <h1>Loading...</h1>
    }
    </div>
  ); 
};


const mapStateToProps = ({ pokemonById }) => ({
  pokemonById
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonById: id => dispatch(fetchPokemonById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);


/*
      : <h1>Loading...</h1>
 * */
