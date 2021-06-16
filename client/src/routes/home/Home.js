import { useEffect } from "react";
import { printCards } from "../../helpers/printCards";
import { HomeStyles } from "./Home.styles.js";

import { connect } from "react-redux";
import fetchPokemons from "../../redux/reducers/fetchPokemons";

import "./home.css";

const Home = ({ fetchPokemons, pokemons }) => { 
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]); 

  return (
    <HomeStyles>
      {
        pokemons?.data 
          ? printCards(pokemons.data) 
          : <h1>Loading...</h1>
      }
    </HomeStyles>
  ); 
};

const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: (page, sort, order) => dispatch(fetchPokemons(page, sort, order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
