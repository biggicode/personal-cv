import * as S from "./semi-title.style";
import GridRow from "../grid/grid-row";

function SemiTitle({ text }) {
  return (
    <GridRow gridColumn={"1/-1"}>
      <S.SemiTitle>{text}</S.SemiTitle>
    </GridRow>
  );
}

export default SemiTitle;
