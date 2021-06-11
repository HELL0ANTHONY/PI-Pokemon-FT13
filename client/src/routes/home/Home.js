import { useEffect } from "react";
import { connect } from "react-redux";
import fetchPokemons from "../../redux/reducers/fetchPokemons";

import HomeLogic from "./HomeLogic"; 
import "./home.css";

const Home = ({ fetchPokemons, pokemons }) => {
  const { printCards } = HomeLogic();

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]); 

  return (
    <div>
    {
      pokemons?.data 
      ? printCards(pokemons.data) 
      : <h1>Loading...</h1>
    }
    </div>
  ); 
};

const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: (page, sort, order) => dispatch(fetchPokemons(page, sort, order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
