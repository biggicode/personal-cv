import GridRow from "../grid/grid-row";
import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";
import SemiTitle from "../semi-title";
import PillButton from "../pill-button";

import * as S from "./welcome.style";
import DumbGap from "../grid/dumb-gap";

import Data from "../../data/info.json";

function Welcome({ data }) {
  return (
    <>
      <SectionTitle text={data.sectionTitle} />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
      <GridRow gridColumn={"1/-1"}>
        <S.Name>{data.name}</S.Name>
      </GridRow>
      <GridRow gridColumn={"1/-1"}>
        <S.JobTitle>{data.jobTitle}</S.JobTitle>
      </GridRow>

      <DumbGap />

      <SemiTitle text={data.sectionSubtitle} />

      <GridRow gridColumn={"1/-1"}>
        <S.DescriptionBox>
          <S.DescriptionText>{data.boxContent}</S.DescriptionText>
        </S.DescriptionBox>
      </GridRow>

      <DumbGap />

      <GridRow gridColumn={"1/-1"}>
        <PillButton icon="download" url={"blabla"} text={data.btnText} />
      </GridRow>

      <GridRow gridColumn="1/-1">
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Welcome;
