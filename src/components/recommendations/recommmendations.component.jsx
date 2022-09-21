import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";
import GridRow from "../grid/grid-row";
import DumpGap from "../grid/dumb-gap";

import * as S from "./recommendations.style";

function Recommendations({ data }) {
  return (
    <>
      <SectionTitle text={data.sectionTitle} />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
      {data.recomList.map((recom, index) => (
        <>
          {index ? <DumpGap /> : ""}

          <GridRow gridColumn="span 4" key={recom.personName}>
            <S.RecommendContainer>
              <S.RecommendHeader></S.RecommendHeader>
              <S.RecommendBody>
                <S.RecommendText>{recom.recomText}</S.RecommendText>
              </S.RecommendBody>
            </S.RecommendContainer>
          </GridRow>
        </>
      ))}
    </>
  );
}

export default Recommendations;
