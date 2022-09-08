import * as S from "./grid-row.style";

function GridRow({ children, ...props }) {
  return <S.GridRow {...props}>{children}</S.GridRow>;
}

export default GridRow;
