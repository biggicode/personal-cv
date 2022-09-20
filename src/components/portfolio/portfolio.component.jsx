import GridRow from "../grid/grid-row";
import SectionTitle from "../section-title";
import SemiTitle from "../semi-title";
import SectionIcon from "../section-icon";

import * as S from "./portfolio.style";

function Portfolio({ data }) {
  return (
    <>
      <SectionTitle text={data.sectionTitle} />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
      <GridRow gridColumn="1/-1">
        <SemiTitle text={data.subTitle} />
      </GridRow>
      {data.projects.map((project) => (
        <GridRow gridColumn="span 4" key={project.title}>
          <S.Card>
            <S.BoxHeader>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectTechnologies>
                {project.technologies.join(", ")}
              </S.ProjectTechnologies>
            </S.BoxHeader>
            <S.StyledImg src="/bid.png" />
            {project.buttons.map((button, index) => (
              <S.ProjectButton
                key={index}
                number={index}
                className={`icon-${button.icon}`}
                href={button.url}
              />
            ))}
          </S.Card>
        </GridRow>
      ))}
      <GridRow gridColumn="1/-1">
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Portfolio;
