import styled from "styled-components";

export const StyledList = styled.ul`
  border: 2px solid #707070;
  border-radius: 6px;
  background-color: #fff;
`;

export const ListItem = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 2px solid #707070;
  }
`;

export const ListItemIcon = styled.div`
  font-size: 20px;
  color: ${({ color }) => color};
`;

export const ListItemText = styled.p`
  font-size: 14px;
  color: #999999;
  padding-left: 20px;
`;

export const ListItemNumber = styled.p`
  font-size: 18px;
  color: #666666;
  margin-left: auto;
`;

export const Pill = styled.div`
  line-height: 30px;
  padding-inline: 17px;
  color: #fff;
  font-size: 9px;
  font-weight: 800;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${({ bgColor }) => bgColor};
  display: inline-block;
  border-radius: 15px;
`;
