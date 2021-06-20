import { Link } from "react-router-dom";
import { Main, CardContainer, Front, Back, Image, Box, List, Id } from "./Card.styles";

const Card = ({ id, name, image, types }) => { 
  const sliceId = id => id.slice(0, 8).concat("...");

  return (
    <Main>
      <CardContainer>
        <Front>
          <Box>
            <Image image={image}/> 
          </Box> 
          <h1>{name}</h1>
        </Front>
        <Back>
          <Id>
            <h3> Id: {typeof id === "number" ? id : sliceId(id)}</h3>
          </Id>
          <h2>{`${name}'s types`}</h2>
          <List>
            {types.map((type, index) => <li key={index}>{type.name}</li>)}
          </List> 
          <Link to={`/details/${id}`}>Go to Details</Link>
        </Back>
      </CardContainer>
    </Main>
  );
};

export default Card;
