import GridRow from "../grid/grid-row";
import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";

import * as S from "./welcome.style";

function Welcome() {
  return (
    <>
      <SectionTitle text="Welcome to my CV" />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
      <GridRow gridColumn={"1/-1"}>
        <S.Name>Laurentiu Oncescu</S.Name>
      </GridRow>
      <GridRow gridColumn="1/-1">
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Welcome;
