import GridRow from "../grid/grid-row";
import SectionTitle from "../section-title";
import SemiTitle from "../semi-title";
import SectionIcon from "../section-icon";

import * as S from "./portfolio.style";

function Portfolio({ data }) {
  return (
    <>
      <SectionTitle text={data.sectionTitle} />
    </>
  );
}

export default Portfolio;
