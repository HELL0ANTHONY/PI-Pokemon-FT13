import styled from "styled-components";

export const SelectStyles = styled.select`
  padding: 20px auto;
  border-radius: 3px;
  font-family: "Roboto Mono";
  font-size: 18px;
  font-weight: 700px;
  background-color: #FF8000;
  color: white;
  border: 1px solid gray;

  &:hover {
    border-color: #FFD480;
  }
  
  option {
    background: white;
    color: #FF8000; 
  }
`;
