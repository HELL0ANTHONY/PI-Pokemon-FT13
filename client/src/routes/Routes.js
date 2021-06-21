import { Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Home from "./home/Home";
import Details from "./details/Details";
import PokemonForm from "./pokemonForm/PokemonForm";

const Routes = (_) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing message={"Who's that pokemon?"} />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/form" component={PokemonForm} />
      </Switch>
    </>
  );
};

export default Routes;
