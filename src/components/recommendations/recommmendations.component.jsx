import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";
import GridRow from "../grid/grid-row";
import DumpGap from "../grid/dumb-gap";

import * as S from "./recommendations.style";
import { Fragment } from "react";

function Recommendations({ data }) {
  return (
    <>
      <SectionTitle text={data.sectionTitle} />
      <GridRow>
        <SectionIcon type="red" />
      </GridRow>
      {data.recomList.map((recom, index) => (
        <Fragment key={index}>
          <GridRow gridColumn="span 4" key={recom.personName}>
            <S.RecommendContainer index={index}>
              <S.RecommendHeader>
                <S.RecommendImg src={recom.avatar} />
                <S.NameWrapper>
                  <S.Name>{recom.personName}</S.Name>
                  <S.Job>{recom.personJob}</S.Job>
                </S.NameWrapper>
              </S.RecommendHeader>
              <S.RecommendBody>
                <S.RecommendText>{recom.recomText}</S.RecommendText>
              </S.RecommendBody>
            </S.RecommendContainer>
          </GridRow>
        </Fragment>
      ))}
      <GridRow>
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Recommendations;
