import GridRow from "../grid/grid-row";
import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";
import SemiTitle from "../semi-title";
import PillButton from "../pill-button";

import * as S from "./welcome.style";
import DumbGap from "../grid/dumb-gap";

function Welcome() {
  return (
    <>
      <SectionTitle text="Welcome to my CV" />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
      <GridRow gridColumn={"1/-1"}>
        <S.Name>Laurentiu Oncescu</S.Name>
      </GridRow>
      <GridRow gridColumn={"1/-1"}>
        <S.JobTitle>Junior Web Developer</S.JobTitle>
      </GridRow>

      <DumbGap />

      <SemiTitle text="About me" />

      <GridRow gridColumn={"1/-1"}>
        <S.DescriptionBox>
          <S.DescriptionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, sapiente.
          </S.DescriptionText>
        </S.DescriptionBox>
      </GridRow>

      <DumbGap />

      <GridRow gridColumn={"1/-1"}>
        <PillButton icon="download" url={"blabla"} text="Download CV" />
      </GridRow>

      <GridRow gridColumn="1/-1">
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Welcome;
