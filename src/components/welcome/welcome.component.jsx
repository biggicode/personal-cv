import GridRow from "../grid/grid-row";
import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";
import SemiTitle from "../semi-title";
import PillButton from "../pill-button";

import * as S from "./welcome.style";
import DumbGap from "../grid/dumb-gap";

function Welcome({ data }) {
  return (
    <>
      <SectionTitle id="welcome" text={data.sectionTitle} />
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
        <PillButton icon="download" url="https://docs.google.com/document/d/10yHrnfB0BQoFoq8f00OXor67eHLg8DWk/edit?usp=sharing&ouid=117039979677052260305&rtpof=true&sd=true" text={data.btnText} />
      </GridRow>

      <GridRow>
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Welcome;
