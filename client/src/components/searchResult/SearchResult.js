import { useSelector, useDispatch } from "react-redux";
import { cleanPokemonByName } from "../../redux/actions/actions";
import { printCards } from "../../helpers/printCards";
import Button from "../button/Button";
import {
  ResultContainer,
  CardContainer,
  BtnPosition,
} from "./SearchResult.styles.js";

const SearchResult = () => {
  const dispatch = useDispatch();
  const closeWindow = event => {
    event.preventDefault();
    dispatch(cleanPokemonByName());
  };

  const { pokemonByName } = useSelector(state => state);
  return (
    <ResultContainer isPokemon={pokemonByName?.data}>
      <CardContainer>
        <BtnPosition>
          <Button
            onClick={closeWindow}
            type="button"
            children={"X"}
            buttonStyle="btn--danger--outline"
            buttonSize="btn--medium"
          />
        </BtnPosition>
        {Array.isArray(pokemonByName?.data) && printCards(pokemonByName.data)}
        {Array.isArray(pokemonByName?.data) && !pokemonByName?.data.length && (
          <h1>UPS! There is no such Pokemon</h1>
        )}
      </CardContainer>
    </ResultContainer>
  );
};

export default SearchResult;
