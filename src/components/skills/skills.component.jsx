import * as S from "./skills.style";
import SectionTitle from "../section-title";
import SemiTitle from "../semi-title";
import SectionIcon from "../section-icon";
import GridRow from "../grid/grid-row";
import DumbpGap from "../grid/dumb-gap";
import { Fragment } from "react";

function Skills({ data }) {
  return (
    <>
      <SectionTitle id="skills" text={data.sectionTitle} />
      <GridRow>
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
      {data.skillsList.map((skillSection) => (
        <Fragment key={skillSection.listTitle}>
          <DumbpGap />
          <SemiTitle text={skillSection.listTitle} />
          <GridRow>
            {skillSection.pillList.map((pill) => (
              <S.Pill bgColor={pill.color} key={pill.label}>
                {pill.label}
              </S.Pill>
            ))}
          </GridRow>
        </Fragment>
      ))}
      <GridRow>
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Skills;
