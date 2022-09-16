import * as S from "./skills.style";
import SectionTitle from "../section-title";
import SemiTitle from "../semi-title";
import SectionIcon from "../section-icon";
import GridRow from "../grid/grid-row";

function Skills({ data }) {
  return (
    <>
      <SectionTitle text={data.sectionTitle} />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
      <SemiTitle text={data.legend.legendTitle} />
      <GridRow gridColumn={"span 4"}>
        <S.StyledList>
          {data.legend.legendList.map((item, index) => (
            <S.ListItem key={item.icon}>
              <S.ListItemIcon
                className={`icon-${item.icon}`}
                color={item.color}
              />
              <S.ListItemText>{item.label}</S.ListItemText>
              <S.ListItemNumber>{index + 1}</S.ListItemNumber>
            </S.ListItem>
          ))}
        </S.StyledList>
      </GridRow>
    </>
  );
}

export default Skills;
