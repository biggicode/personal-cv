import styled from "styled-components";

export const MenuWrapper = styled.div`
  background-color: #fff;
  width: 220px;
  /* height: 40px; */
  border: 2px solid #707070;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  position: fixed;
  right: 10px;
  top: 200px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  line-height: 40px;
  text-align: right;
  padding-right: 20px;
  color: #808080;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: #ff006d;
    color: #fff;
  }
`;
