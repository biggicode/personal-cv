import SectionTitle from "../section-title";
import SectionIcon from "../section-icon";
import GridRow from "../grid/grid-row";

function Contact({ data }) {
  return (
    <>
      <SectionTitle text={data.sectionTitle} />
      <GridRow gridColumn="1/-1">
        <SectionIcon type="red" />
      </GridRow>
    </>
  );
}

export default Contact;
