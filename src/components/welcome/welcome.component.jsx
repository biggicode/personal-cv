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
      <GridRow>
        <SectionIcon type="red" />
      </GridRow>
      <GridRow>
        <S.Name>{data.name}</S.Name>
      </GridRow>
      <GridRow>
        <S.JobTitle>{data.jobTitle}</S.JobTitle>
      </GridRow>

      <DumbGap />

      <SemiTitle text={data.sectionSubtitle} />

      <GridRow>
        <S.DescriptionBox>
          <S.DescriptionText>{data.boxContent}</S.DescriptionText>
        </S.DescriptionBox>
      </GridRow>

      <DumbGap />

      <GridRow>
        <PillButton icon="download" url={"blabla"} text={data.btnText} />
      </GridRow>

      <GridRow>
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Welcome;
