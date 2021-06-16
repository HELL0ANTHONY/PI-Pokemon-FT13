import styled from "styled-components";
import { flex } from "../../elements/flex.style.js";

const colors = {
  front: "#F9E79F",
  back: "#2e2956",
  orange: "#ff6b00",
  cinc: "#fafbfd"
};

const commonStyles = (width, height, radius = 0, position = "static") => {
  return `
    position: ${position};
    width: ${width};
    height: ${height};
    border-radius: ${radius};
  `; 
};

export const Main = styled.div`
  ${commonStyles("250px", "350px", "8px", "relative")};
  text-transform: capitalize;
`;

export const CardContainer = styled.div`
  ${commonStyles("100%", "100%", "8px", "absolute")};
  transform-style: preserve-3d;
  transition: transform 1.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.section`
  backface-visibility: hidden;
  ${flex("center", "flex-start", "column")};
  ${commonStyles("100%", "100%", "8px", "absolute")}; 
  background: ${colors.front};
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.62); 
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.62);

  h1 {
    font-family: "Baloo Tammudu";
    font-weight: 700;
    font-style: italic;
    font-size: 30px;
    color: ${colors.back};
    margin-top: 20px;
  }
`;

export const Box = styled.div`
  ${flex("center", "center", "column")};
  ${commonStyles("150px", "150px", "50%")};
  margin-top: 50px;
  border-bottom: 10px solid ${colors.orange};

  background: ${colors.back};
`;

export const Image = styled.div`
  ${commonStyles("130px", "130px", "50%")};
  background: url(${({image}) => image}) no-repeat; 
  background-size: cover;
`;

export const Back = styled(Front)`
  transform: rotateY(180deg);
  ${flex("center", "center", "column")}; 
  font-family: "Roboto Mono";

  color: ${colors.cinc};
  background: ${colors.back};

  h2 {
    font-family: "Baloo Tammudu";
  }

  a {
    color: ${colors.cinc};
    display: inline-block;
    text-decoration: none;
    text-align: center;
    margin-top: 10px;
    border: 1px solid ${colors.cinc};
    padding: 7px;
    border-radius: 4px;
    transition: background 1s ease;
    
    &:hover {
      background: ${colors.orange};
    }
  } 
`;

export const Id = styled.div` 
  ${flex("center", "flex-start", "row")}; 
    width: 100%;
    padding: 20px;
    
    h3 {
      padding: auto;
      height: 25px;
      margin-top: 10px;
      margin-left: 25px;
      border-left: 8px solid ${colors.orange};
      border-top-left-radius : 3px;
      border-bottom-left-radius: 3px;
    }
 `; 

export const List = styled.ul`
  ${flex("center", "center", "column")}; 
  list-style-type: none; 
  
  li {
    font-size: 20px;
    display: block;
    width: 100%;
    padding: 5px;
    margin-right: 50px;
    text-align: center;
  }
`; 
