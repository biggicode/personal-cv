import styled from "styled-components";

export const StyledLink = styled.a`
  width: 40px;
  height: 40px;
  margin: 20px auto;
  background-color: ${({ className }) =>
    className === "icon-github" ? "#D52027" : "#50D166"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;

  &:nth-last-of-type() {
    transform: rotate(180deg);
  }
`;
