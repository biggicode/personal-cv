import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  background-color: #d52027;
  height: 60px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    height: 60px;
    width: 35px;
    background-color: inherit;
    position: absolute;
    right: -35px;
    top: 0;
  }
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  font-weight: 500;
  line-height: 40px;
`;
