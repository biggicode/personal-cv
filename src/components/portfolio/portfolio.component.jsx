import GridRow from "../grid/grid-row";
import SectionTitle from "../section-title";
import SemiTitle from "../semi-title";
import SectionIcon from "../section-icon";

import * as S from "./portfolio.style";

function Portfolio({ data }) {
  return (
    <>
      <SectionTitle id="portfolio" text={data.sectionTitle} />
      <GridRow>
        <SectionIcon type="red" />
      </GridRow>
      <SemiTitle text={data.subTitle} />
      {data.projects.map((project) => (
        <GridRow gridColumn="span 4" key={project.title}>
          <S.Card>
            <S.BoxHeader>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectTechnologies>
                {project.technologies.join(", ")}
              </S.ProjectTechnologies>
            </S.BoxHeader>
            <S.StyledImg src={`/${project.img}`} />
            {project.buttons.map((button, index) => (
              <S.ProjectButton
                key={index}
                number={index}
                className={`icon-${button.icon}`}
                href={button.url}
                target="_blank"
              />
            ))}
          </S.Card>
        </GridRow>
      ))}
      <GridRow>
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Portfolio;
