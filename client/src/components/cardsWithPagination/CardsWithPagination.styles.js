import styled from "styled-components";

export const Cards = styled.div`
  margin: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-content: center;

  .no-pokemon {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: "Roboto Mono";
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
