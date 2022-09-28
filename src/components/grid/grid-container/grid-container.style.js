import styled from "styled-components";

export const GridContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding-inline: 35px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 16px;
    padding-inline: 80px;
  }

  @media screen and (min-width: 1366px) {
    grid-template-columns: repeat(12, 1fr);
    padding-inline: 140px;
  }
`;
