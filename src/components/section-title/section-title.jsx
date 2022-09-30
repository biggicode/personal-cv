import * as S from "./section-title.style";
import GridRow from "../grid/grid-row";

function SectionTitle({ text, id }) {
  return (
    <GridRow>
      <S.Wrapper>
        <S.Heading id={id}>{text}</S.Heading>
      </S.Wrapper>
    </GridRow>
  );
}

export default SectionTitle;
