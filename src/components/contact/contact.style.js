import styled from "styled-components";

export const ImgWrapper = styled.div`
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
`;

export const StyledImg = styled.img`
  border-radius: 6px;
  width: 100%;
`;

export const ContactButton = styled.button`
  background-color: ${({ active }) => (active ? "#D52027" : "#1875f0")};
  width: 100%;
  padding-bottom: 100%;
  border-radius: 50%;
  border: none;
  position: relative;
`;

export const StyledIcon = styled.div`
  position: absolute;
  color: #fff;
  font-size: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContactBox = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 6px;
  position: relative;
  grid-column: 1/-1;

  @media screen and (min-width: 1366px) {
    grid-column: span 8;
  }

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

export const BoxHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 22px;
    color: #808080;
    font-weight: 500;
  }
`;

export const CrossIcon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 12px;
  background-color: #1875f0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxContent = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
  font-size: 14px;
  font-weight: 500;
  color: #707070;
`;

export const BoxFooter = styled.div`
  padding: 20px;
`;
