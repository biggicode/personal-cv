import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  background-color: #d52027;
  height: 60px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  position: relative;

  &::before {
    content: "";
    background-color: #d52027;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -35px;
    left: -35px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  font-weight: 500;
  line-height: 40px;
`;
