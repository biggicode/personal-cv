import * as S from "./semi-title.style";
import GridRow from "../grid/grid-row";

function SemiTitle({ text }) {
  return (
    <GridRow>
      <S.SemiTitle>{text}</S.SemiTitle>
    </GridRow>
  );
}

export default SemiTitle;
