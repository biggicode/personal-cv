import styled from "styled-components";

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RecommendHeader = styled.div`
  display: flex;
  gap: 15px;
`;

export const RecommendImg = styled.img`
  border-radius: 50%;
  width: 65px;
  height: 65px;
  background-color: red;
  border: 4px solid #fff;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

export const Name = styled.p`
  font-weight: 22px;
  font-weight: 600;
  color: #808080;
`;

export const Job = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #808080;
`;

export const RecommendBody = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  position: relative;

  &:before {
    content: "";
    border-bottom: 9px solid #fff;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 9px solid transparent;
    position: absolute;
    top: -18px;
    left: 20px;
  }
`;

export const RecommendText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  color: #707070;
`;
