import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid #707070;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 40px;
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
