import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import fetchPokemonById from "../../redux/reducers/fetchPokemonById";
import { cleanDetails } from "../../redux/actions/actions";

import CardDetails from "../../components/cardDetails/CardDetails";
import "./details.css";

const Details = () => {
  const { id } = useParams();
  const { pokemonById } = useSelector(state => state);
  const pokemon = pokemonById?.data[0];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonById(id));

    return () => dispatch(cleanDetails());
  }, [dispatch, id]);

  return (
    <div className="detail--container">
      {pokemon ? <CardDetails {...pokemon} /> : <h1>Loading...</h1>}
    </div>
  );
};

export default Details;
