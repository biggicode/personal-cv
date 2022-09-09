import GridRow from "../grid/grid-row";
import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";

function Welcome() {
  return (
    <>
      <SectionTitle text="Welcome to my CV" />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
      <GridRow gridColumn="1/-1">
        <SectionIcon type="green" />
      </GridRow>
    </>
  );
}

export default Welcome;
