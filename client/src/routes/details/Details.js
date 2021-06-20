import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import fetchPokemonById from "../../redux/reducers/fetchPokemonById";

import CardDetails from "../../components/cardDetails/CardDetails";
import "./details.css";

const Details = () => {
  const pokemonById = useSelector(({ pokemonById }) => pokemonById);
  const dispatch    = useDispatch();
  const { id }      = useParams();
  const pokemon     = pokemonById?.data[0];

  useEffect(() => {
    dispatch(fetchPokemonById(id));
  }, [dispatch, id]);

  return (
    <div className="detail--container">
      {pokemon ? <CardDetails {...pokemon} /> : <h1>Loading...</h1>}
    </div>
  ); 
};

export default Details;
