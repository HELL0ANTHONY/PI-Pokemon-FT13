import { Link } from "react-router-dom";
import { Main, CardContainer, Front, Back, Image, Box, List, Id } from "./Card.styles";

const Card = ({ id, name, image, types }) => {
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
          <h2>{`${name}'s types`}</h2>
          <Id>
            <h3> Id: {id}</h3>
          </Id>
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
