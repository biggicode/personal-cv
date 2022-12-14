import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid #707070;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 40px;
  position: relative;
`;

export const BoxHeader = styled.div`
  padding: 10px 20px;
  border-bottom: 2px solid #707070;
`;

export const ProjectTitle = styled.p`
  font-size: 14px;
  color: #808080;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProjectTechnologies = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: #707070;
  font-style: italic;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: top;
  display: block;
  border-radius: 0 0 4px 4px;
`;

export const ProjectButton = styled.a`
  width: 40px;
  height: 40px;
  background-color: #ff006d;
  border-radius: 0 0 50% 50%;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -42px;
  right: ${({ number }) => 5 + number * 41}px;
`;
