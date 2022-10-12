import styled from "styled-components";

export const GridRow = styled.div`
  grid-column: ${({ gridColumn }) => (gridColumn ? gridColumn : "1/-1")};
`;
