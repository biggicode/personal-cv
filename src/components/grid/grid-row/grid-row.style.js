import styled from "styled-components";

export const GridRow = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn};

  &:last-of-type .icon-arrow-down {
    transform: rotate(180deg);
  }
`;
