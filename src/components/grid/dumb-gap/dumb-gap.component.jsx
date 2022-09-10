import GridRow from "../grid-row";
import * as S from "./dumb-gap.style";

function DumbGap() {
  return (
    <GridRow gridColumn={"1/-1"}>
      <S.StyledDiv></S.StyledDiv>
    </GridRow>
  );
}

export default DumbGap;
