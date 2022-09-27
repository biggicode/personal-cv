import * as S from "./section-title.style";
import GridRow from "../grid/grid-row";

function SectionTitle({ text }) {
  return (
    <GridRow>
      <S.Wrapper>
        <S.Heading>{text}</S.Heading>
      </S.Wrapper>
    </GridRow>
  );
}

export default SectionTitle;
