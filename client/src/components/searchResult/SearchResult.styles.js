import styled from "styled-components";

export const ResultContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: ${({ isPokemon }) => (isPokemon === undefined ? "none" : "block")};

  h1 {
    font-family: "Roboto Mono";
    font-size: 24px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  max-width: 100%;
  height: 100%;
  position: relative;
`;

export const BtnPosition = styled.div`
  position: absolute;
  top: 10px;
  right: 300px;
`;
