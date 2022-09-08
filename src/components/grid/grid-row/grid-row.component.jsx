import * as S from "./grid-row.style";

function GridRow({ children, gridColumn }) {
  return <S.GridRow gridColumn={gridColumn}>{children}</S.GridRow>;
}

export default GridRow;
