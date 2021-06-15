// import { Link } from "react-router-dom";
// import CardLogic from "./CardLogic";
import { Main, CardContainer, Front, Back, Image, Box } from "./Card.styles";

const Card = ({ id, name, image, stats }) => {
//  const { printStats, titleCase } = CardLogic();
  return (
    <Main>
      <CardContainer>
        <Front>
          <Box>
            <Image image={image}/> 
         </Box> 
        </Front>
        <Back>Back</Back>
      </CardContainer>
    </Main>
  );
};

export default Card;


/*
 * 
    <div className="card">
      <div
        className="cardImage"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="cardText">
        <Link className="link" to={`/details/${id}`}>
          <h2>{titleCase(name)}</h2>
        </Link>
      </div>
      <div className="cardStats">
        <div className="stat">
          <div className="type">Temperaments</div>
          <div className="value">
            {printStats(stats)}
          </div>
        </div>
      </div>
    </div>
 *
 *
 * */
