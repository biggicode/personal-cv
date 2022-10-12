import styled, { css } from "styled-components";

const sharedStyles = css`
  width: 40px;
  height: 40px;
  margin: 20px auto;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const StyledLink = styled.a`
  ${sharedStyles}
  background-color: #D52027;
  text-decoration: none;
`;

export const StyledDiv = styled.div`
  ${sharedStyles}
  background-color: #50d166;

  ${({ last }) => (last ? "transform: rotate(180deg);" : "")}
`;
