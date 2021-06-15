import styled from "styled-components";

const colors = {};

const commonStyles = (position, width, height) => {
  return `
    position: ${position};
    width: ${width};
    height: ${height};
    border-radius: 8px;
  `; 
};

export const Main = styled.div`
  ${commonStyles("relative", "250px", "350px" )};
`;

export const CardContainer = styled.div`
  ${commonStyles("absolute", "100%", "100%")};
  transform-style: preserve-3d;
  transition: transform 1.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.section`
  ${commonStyles("absolute", "100%", "100%")};
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #ffc728;
  color: white;
`;

export const Back = styled(Front)`
  transform: rotateY(180deg);

  background: #fafafa;
  color: black;
`;

const flex = (align, justify, direction = "row") => {
  return `
    display: flex;
    flex-direction: ${direction}; 
    align-items: ${align};
    justify-content: ${justify};
  `;
};
/*
 *
  display: flex; 
  align-items: center;
  flex-direction: column;
  justify-content: center;
 *
 * */
export const Box = styled.div`
  ${flex("center", "center", "column")};
  margin-top: 50px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  
  background: blue;
  border-bottom: 10px solid red;

`;
  
export const Image = styled.div`
    background: url(${({image}) => image}) no-repeat; 
    background-size: cover;
    width: 130px;
    height: 130px;
    border-radius: 50%;
`;


